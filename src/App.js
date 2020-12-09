import React, { useState } from "react";
import AddColorForm from "./AddColorForm";
import colorData from "./assets/color-data.json";
import ColorList from "./ColorList";
import { v4 } from "uuid";

function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColor = { title, color, rating: 0, id: v4() };
          return setColors([...colors, newColor]);
        }}
      />
      <ColorList
        colors={colors}
        onRemoveColor={(id) =>
          setColors(colors.filter((color) => color.id !== id))
        }
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
      />
    </>
  );
}

export default App;
