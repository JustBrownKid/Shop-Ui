import React from "react";

function ColorSelector({ colors =[] ,setColor , size }) {
    function ColorSelector(parm) {
        setColor(colors[parm]);
    }
    return (
            <div style={{ display: "flex", flexDirection: "row", width:'fit-content' , gap: ".5rem" }}>
                {colors.map((  item ,index  ) => (
                    <span
                        key={index}
                        style={{
                            width: size,
                            height: size,
                            borderRadius: "50%",
                            backgroundColor: `${item.value}`,
                            border: "3px solid #9f9f9f",
                            transition: "all 0.2s ease",
                            cursor: "pointer",
                        }}
                        onClick={() => setColor(item)}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#000")}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#9f9f9f")}
                    />
                ))}
            </div>
    )
}
export default ColorSelector;