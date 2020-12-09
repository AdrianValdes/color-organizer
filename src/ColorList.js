import React from "react";
import Color from "./Color";
export default function ColorList({
  colors = [],
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) {
  if (!colors.length) return <div>No colors listed.</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          onRate={onRateColor}
          {...color}
          key={color.id}
          onRemove={onRemoveColor}
        />
      ))}
    </div>
  );
}
