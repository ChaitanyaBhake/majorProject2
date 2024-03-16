import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
     
      <div className="nleft flex items-center">
        {/* Navbar Logo */}
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        {/* Navigation Links */}
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              // If element is empty, render a vertical line
              <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              // Render a link
              <a key={index} className=" text-sm flex items-center gap-1" href="#">
                {index === 1 && (
                  // If index is 1 (Work), render a green dot before the link
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-2 h-2  rounded-full bg-green-500"
                  ></span>
                )}
                {elem} {/* Render the text of the link */}
              </a>
            )
          )}
        </div>
      </div>
      <Button/>
    </div>
  );
}

export default Navbar;
