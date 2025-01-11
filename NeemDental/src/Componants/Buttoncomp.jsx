import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import "./Buttoncomp.css";

function Buttoncomp({btnname}) {
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
      className="magnetic-btntwo"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    //   onMouseMove={handleMouseMove}
    //   onMouseLeave={handleMouseLeave}
    >
      {/* {name} */}
      <span className="span-mothertwo flex flex-row justify-center items-center">
        {btnname.split(" ").map((char, index) => (
          <span key={index} className="char">{char}</span>
        ))}
        <MdArrowOutward className="arrow"/>
      </span>
      <span className="span-mother2two flex flex-row justify-center items-center">
        {btnname.split(" ").map((char, index) => (
          <span key={index} className="char">{char}</span>
        ))}
        <MdArrowOutward className="arrow"/>
      </span>
    </button>
  );
}

export default Buttoncomp;
