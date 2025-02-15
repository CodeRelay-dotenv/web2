import { AISuggestionLayer } from "@/types/canvas";
import { MarkdownWrapper } from "./MarkdownWrapper";

interface AIProps {
  id: string;
  layer: AISuggestionLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const AISuggestion = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: AIProps) => {
  const { x, y, width, height, value } = layer;
  return (
    <foreignObject
      x={x}
      y={y}
      height={height}
      width={width}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
        backgroundColor: "#fff",
      }}
      className="shadow-md drop-shadow-xl rounded-md overflow-auto"
      
    >
        <MarkdownWrapper source={value} />
    </foreignObject>
  );
};