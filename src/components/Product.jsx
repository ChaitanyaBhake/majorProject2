import React, { useState } from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  const [isHovered, setIsHovered] = useState(false);

  const colors2 = [
    "bg-gradient-to-r from-blue-700 to-cyan-500",
    "bg-gradient-to-br from-blue-50 to-cyan-500",
    "bg-gradient-to-r from-violet-600 to-indigo-600",
    "bg-gradient-to-br from-green-500 to-emerald-900",
    "bg-gradient-to-bl from-purple-700 to-red-500",
    "bg-gradient-to-bl from-orange-400 to-red-500",
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
    mover(count);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`w-full py-20 h-[23rem] text-white relative overflow-hidden transition-all ease-linear  duration-300
       ${
         isHovered ? "scale-90 rounded-xl" : ""
       } transition-transform duration-300 ${isHovered ? colors2[count] : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-20">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10 text-xl">{val.description}</p>
          <div className="flex items-center gap-5">
            {isHovered && val.live && <Button />}
            {isHovered && val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
