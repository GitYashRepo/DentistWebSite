import React, { useState } from "react";
import "./magneticbtn.css";

function Magneticbtn({name}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const button = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - button.left;
    const mouseY = e.clientY - button.top;

    const offsetX = (mouseX - button.width / 2) * 0.2;
    const offsetY = (mouseY - button.height / 2) * 0.2;

    setPosition({
      x: offsetX,
      y: offsetY,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      className="magnetic-btn"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* {name} */}
      <span className="span-mother">
      {name.split("").map((char, index) => (
            <span key={index} className={char === " " ? "space" : "char"}>
                {char}
            </span>
        ))}
      </span>
      <span className="span-mother2">
      {name.split("").map((char, index) => (
            <span key={index} className={char === " " ? "space" : "char"}>
                {char}
            </span>
        ))}
      </span>
    </button>
  );
}

export default Magneticbtn;
