import React from "react";

function ColorSelector({ colors = {}, setColor, size = 30 }) {
  // Convert colors object to array of { name, value }
  const colorArray = Object.entries(colors).map(([name, value]) => ({ name, value }));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "fit-content",
        gap: ".5rem",
      }}
    >
      {colorArray.map((color, index) => (
        <span
          key={index}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: color.value,
            border: "3px solid #9f9f9f",
            transition: "all 0.2s ease",
            cursor: "pointer",
          }}
          onClick={() => setColor(color)}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#000")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "#9f9f9f")
          }
        />
      ))}
    </div>
  );
}

export default ColorSelector;
