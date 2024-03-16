import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
// import Arqitel from "../../assets/Arqitel.webm";
import { Arqitel, Cula, Maniv, TTR, YIR, Showcase } from "../../assets/index";

function Products() {
  let products = [
    {
      title: "arquitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "Show",
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
      live: true,
      case: false,
    },
  ];

  const [position, setPosition] = useState(0);

  const mover = (val) => {
    setPosition(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}

      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          className="window w-[32rem] h-[23rem]  absolute left-[45%] overflow-hidden rounded-lg"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className=" w-full h-[23rem] bg-blue-200  rounded-lg "
          >
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover "
              src={Arqitel}
            ></video>
          </motion.div>

          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className=" w-full h-[23rem] bg-blue-300 rounded-lg"
          >
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover "
              src={Cula}
            ></video>
          </motion.div>

          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className=" w-full h-[23rem] bg-blue-400 rounded-lg"
          >
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover "
              src={TTR}
            ></video>
          </motion.div>

          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className=" w-full h-[23rem] bg-blue-500 rounded-lg"
          >
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover "
              src={Maniv}
            ></video>
          </motion.div>

          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className=" w-full h-[23rem] bg-blue-600 rounded-lg"
          >
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover "
              src={YIR}
            ></video>
          </motion.div>

          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            className=" w-full h-[23rem] bg-blue-600 rounded-lg"
          >
            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover "
              src={Showcase}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
