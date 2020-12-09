import React, { useState } from "react";
import AddColorForm from "./AddColorForm";
import colorData from "./assets/color-data.json";
import ColorList from "./ColorList";

function App() {
  const [colors, setColors] = useState(colorData);

  return (
    <>
      <AddColorForm />
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
