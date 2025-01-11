import React, { useState } from "react";
import "./Texthover.css";
import { MdArrowOutward } from "react-icons/md";

function Texthover({textname}) {
  return (
    <button className="magnetic-btnthree cursor-pointer">
      <span className="span-motherthree flex flex-row justify-center items-center">
        {textname.split("").map((char, index) => (
            <span key={index} className={char === " " ? "space" : "char"}>
                {char}
            </span>
        ))}
        <MdArrowOutward className="arrow"/>
      </span>
      <span className="span-mother2three flex flex-row justify-center items-center">
        {textname.split("").map((char, index) => (
            <span key={index} className={char === " " ? "space" : "char"}>
              {char}
            </span>
        ))}
        <MdArrowOutward className="arrow"/>
      </span>
    </button>
  );
}

export default Texthover;
