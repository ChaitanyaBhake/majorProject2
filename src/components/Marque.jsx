// Marque.js
import React from "react";
import {motion } from "framer-motion"

function Marque({ images_urls,direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction==='left'? "0":"-100%" }}
        animate={{ x: direction==='left'? "-100%":"0"}}
        transition={{ease:"linear",duration:20, repeat:Infinity}}
        className="flex flex-shrink-0 py-10 gap-40 pr-40"
      >
        {images_urls.map((url, index) => (
          <img key={index} src={url} className="w-[6vw] flex-shrink-0" alt="" />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction==='left'? "0":"-100%" }}
        animate={{ x: direction==='left'? "-100%":"0"}}
        transition={{ease:"linear",duration:20, repeat:Infinity}}
        className="flex flex-shrink-0 py-10 gap-40 pr-40"
      >
        {images_urls.map((url, index) => (
          <img key={index} src={url} className="w-[6vw] flex-shrink-0" alt="" />
        ))}
      </motion.div>
     
    </div>
  );
}

export default Marque;
