"use client";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useDeleteLayers } from "@/hooks/useDeleteLayers";
import { useSelectionBounds } from "@/hooks/useSelectionBounds";
import { useMutation, useSelf } from "@liveblocks/react/suspense";
import { Camera, Color } from "@/types/canvas";
import { BringToFront, SendToBack, Trash2, Sparkle } from "lucide-react";
import { memo } from "react";
import { ColorPicker } from "./colorPicker";
import html2canvas from "html2canvas";

interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

export const SelectionTools = memo(
  ({ camera, setLastUsedColor }: SelectionToolsProps) => {
    const selection = useSelf((self) => self.presence.selection);

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
        html2canvas(magicSearch,{
          x: selectionBounds.x - camera.x,
          y: selectionBounds.y - camera.y,
          width: selectionBounds.width,
          height: selectionBounds.height,
        }).then((canvas) => {
          const img = canvas.toDataURL("image/png");
          fetch("http://localhost:3000/api/upload", {
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
                console.log("Response from uploader API:", data); // Log the response
            })
            .catch((error) => {
                console.error("Error uploading image:", error);
            });
        });
      }
    };


    const x = selectionBounds.width / 2 + selectionBounds.x - camera.x;
    const y = selectionBounds.y + camera.y;

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