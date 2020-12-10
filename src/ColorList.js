import React from "react";

import { useColors } from "./color-hooks";
import Color from "./Color";

export default function ColorList() {
  const { colors } = useColors();

  if (!colors.length) return <div>No colors listed. (Add a color)</div>;
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color {...color} key={color.id} />
      ))}
    </div>
  );
}
