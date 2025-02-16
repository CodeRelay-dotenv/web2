"use client";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useDeleteLayers } from "@/hooks/useDeleteLayers";
import { useSelectionBounds } from "@/hooks/useSelectionBounds";
import { useMutation, useSelf } from "@liveblocks/react/suspense";
import { Camera, Color, CanvasMode } from "@/types/canvas";
import { BringToFront, SendToBack, Trash2, Sparkle } from "lucide-react";
import { memo, useState } from "react";
import { ColorPicker } from "./colorPicker";
import html2canvas from "html2canvas";
import { LayerType, Point } from "@/types/canvas";
import { nanoid } from "nanoid";
import { LiveObject } from "@liveblocks/client";

interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
  setCanvasState: (state: any) => void;
  lastUsedColor: Color;
}

export const SelectionTools = memo(
  ({ camera, setLastUsedColor, setCanvasState, lastUsedColor }: SelectionToolsProps) => {
    const MAX_LAYERS = 5000;
    const selection = useSelf((self) => self.presence.selection);

    const [curMagic, setMagic] = useState("idle");
    const [imgUrl, setImgUrl] = useState(null);
    const [query, setQuery] = useState("");
    const [resultMark, setResultMark] = useState(``);
    const ngrokUrl = "https://ai-backend-1088440979862.asia-south1.run.app";

    const deleteLayers = useDeleteLayers();
    const selectionBounds = useSelectionBounds();

    const handleMoveToBack = useMutation(
      ({ storage }) => {
        const liveLayerIds = storage.get("layerIds");

        const indices: number[] = [];

        const arr = liveLayerIds.toImmutable();

        for (let i = 0; i < arr.length; i++) {
          if (selection.includes(arr[i])) {
            indices.push(i);
          }
        }

        for (let i = 0; i < indices.length; i++) {
          liveLayerIds.move(indices[i], i);
        }
      },
      [selection]
    );

    const handleMoveToFront = useMutation(
      ({ storage }) => {
        const liveLayerIds = storage.get("layerIds");

        const indices: number[] = [];

        const arr = liveLayerIds.toImmutable();

        for (let i = 0; i < arr.length; i++) {
          if (selection.includes(arr[i])) {
            indices.push(i);
          }
        }

        for (let i = indices.length - 1; i >= 0; i--) {
          liveLayerIds.move(
            indices[i],
            arr.length - 1 - (indices.length - 1 - i)
          );
        }
      },
      [selection]
    );

    const insertAILayer = useMutation(
      (
        { storage, setMyPresence },
        layerType:
          | LayerType.AISuggestion,

        position: Point,
        mardownResponse: string
      ) => {
        const liveLayers = storage.get("layers");
        if (liveLayers.size >= MAX_LAYERS) {
          return; //TODO: show error message
        }
  
        const liveLayerIds = storage.get("layerIds");
  
        const layerId = nanoid();
  
        const layer = new LiveObject({
          type: layerType,
          x: position.x,
          y: position.y,
          width: 600,
          height: 800,
          fill: lastUsedColor,
          value: mardownResponse, 
        });
  
        liveLayerIds.push(layerId);
        liveLayers.set(layerId, layer);
  
        setMyPresence({ selection: [layerId] }, { addToHistory: true });
        setCanvasState({
          mode: CanvasMode.None,
        });
      },
      [lastUsedColor]
    );

    const handleColorChange = useMutation(
      ({ storage }, fill: Color) => {
        const liveLayers = storage.get("layers");
        setLastUsedColor(fill);

        selection.forEach((id) => {
          liveLayers.get(id)?.set("fill", fill);
        });
      },
      [selection, setLastUsedColor]
    );

    if (!selectionBounds) return null;

    const handleMagicSearch = () => {
      const magicSearch = document.getElementById("canvas");
      if (magicSearch) {
        setMagic("started");
        html2canvas(magicSearch,{
          x: selectionBounds.x + camera.x,
          y: selectionBounds.y + camera.y,
          width: selectionBounds.width,
          height: selectionBounds.height,
        }).then((canvas) => {
          const img = canvas.toDataURL("image/png");
          fetch("/api/upload", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image: img, // Base64 image
                tags: "canvas-upload", // Add any tags if required
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setImgUrl(data.fileUrl);
                console.log("Response from uploader API:", data.fileUrl); // Log the response
            })
            .catch((error) => {
                console.error("Error uploading image:", error);
            });
        });
      }
    };

    const onSearch = () => {
      setMagic("fetching");
      setQuery((prev) => prev.trim());
      if(query.length > 0) {
        fetch(`${ngrokUrl}/generate-content`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              image_url: imgUrl,
              query: query,
          }),
        }).then((response) => response.json())
        .then((data) => {
          let text = data.notes;
          // if(text.substr(0, 11) === "```markdown"){//TODO: markdown trim karna
          //   console.log("aya")
          //   text = text.slice(11,-3);
          // }
          text = text.slice(11,-3);
          console.log("Response from text extractor API:", data.notes); // Log the response
          console.log("text",text)
          setResultMark(text);
          setMagic("idle");
          
          insertAILayer(LayerType.AISuggestion, { x: selectionBounds.width + 20 + selectionBounds.x, y: selectionBounds.y }, text);
      })
      }
      else{
        fetch(`${ngrokUrl}/extract-text`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              image_url: imgUrl,
          }),
        }).then((response) => response.json())
        .then((data) => {
            let text = data.notes;
            // if(text.substr(0, 11) === "```markdown"){//TODO: markdown trim karna
            //   console.log("aya")
            //   text = text.slice(11,-3);
            // }
            text = text.slice(11,-3);
            console.log("Response from text extractor API:", data.notes); // Log the response
            console.log("text",text)
            setResultMark(text);
            setMagic("idle");
            
            insertAILayer(LayerType.AISuggestion, { x: selectionBounds.width + 20 + selectionBounds.x, y: selectionBounds.y }, text);
        })
      }
    };


    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;
    const x2 = selectionBounds.width + 20;
    const y2 = selectionBounds.height;

    return (
      <div
        className="absolute p-3 rounded-xl bg-white shadow-sm border flex select-none"
        style={{
          transform: `translate(
            calc(${x}px - 50%),
            calc(${y - 16}px - 100%)
          )`,
        }}
      >
        {curMagic === "started" && (
          <div
            className="absolute top-0 left-0 p-3 rounded-xl bg-white shadow-sm border flex flex-col select-none 
            w-[450px] h-[200px] gap-4"
            style={{
              transform: `translate(
                calc(${x2 + 90}px),
                calc(${y2 + 150}px)
              )`,
            }}
          > Anything else you want to add to this search query?
            <textarea value={query} onChange={(e) => setQuery(e.target.value)} maxLength={250} className="w-full h-28 border border-gray-300 rounded-md p-2" />
            <button onClick={onSearch} className="w-[20%] h-8 bg-blue-500 text-white rounded-md">Search</button>
          </div>)
        }
        {
          curMagic === "fetching" && (
            <div
              className="absolute top-0 left-0 p-3 rounded-xl bg-white shadow-sm border flex flex-col select-none 
              w-[600px] h-[200px] gap-4 animate-pulse"
              style={{
                transform: `translate(
                  calc(${x2 + 90}px),
                  calc(${y2 + 150}px)
                )`,
              }}
            >
              <p>Fetching data...</p>
            </div>
          )
        }
        {/* {
          curMagic === "final" && (
            <div
              className="absolute top-0 left-0 p-3 rounded-xl bg-white shadow-sm border flex flex-col select-none 
              w-[600px] h-auto gap-4"
              style={{
                transform: `translate(
                  calc(${x2 - 90}px),
                  calc(${y2 - 150}px)
                )`,
              }}
            >
              {resultMark? <MarkdownPreview source={resultMark} wrapperElement={{"data-color-mode": "light"}} /> : <p>No results found</p>}
            </div>
          )
        } */}
        <ColorPicker onChange={handleColorChange} />
        <div className="flex flex-col gap-y-0.5 pr-2 mr-2 border-r border-neutral-200">
          <Hint label="Bring to front">
            <Button variant="board" size="icon" onClick={handleMoveToFront}>
              <BringToFront />
            </Button>
          </Hint>
          <Hint label="Bring to back" side="bottom">
            <Button variant="board" size="icon" onClick={handleMoveToBack}>
              <SendToBack />
            </Button>
          </Hint>
        </div>
        <div className="flex flex-col gap-y-0.5">
          <Hint label="Delete">
            <Button variant="board" size="icon" onClick={deleteLayers}>
              <Trash2 />
            </Button>
          </Hint>
          <Hint label="Magic search" side="bottom">
            <Button variant="board" size="icon" onClick={handleMagicSearch}>
              <Sparkle />
            </Button>
          </Hint>
        </div>
      </div>
    );
  }
);

SelectionTools.displayName = "SelectionTools";