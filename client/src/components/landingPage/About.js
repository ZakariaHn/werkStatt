import React, { useState } from "react";
import { motion } from "framer-motion";

export const About = () => {
  const [Transition] = useState({
    pageVariants: {
      initial: {
        opacity: 0,
      },
      in: {
        opacity: 1,
        x: 0,
        scale: 1,
      },
      out: {
        opacity: 0,
        x: "100vw",
      },
    },
    pageTransition: {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    },
    pageStyle: {
      position: "absolute",
    },
  });

  const { pageStyle, pageVariants, pageTransition } = Transition;

  return (
    <motion.div
      style={pageStyle}
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="about-page"
    >
      <strong> What exactly do we offer? </strong>
      <p>
        With our software you can quickly and easily call up and record all
        information about your customers and their vehicles. such as create
        customer with vehicle, as well as registiring operation for each
        vehicle. This data can be adopted at any time with just one click. With
        our master data management software you always know when and what has
        been done on the vehicles.
      </p>
    </motion.div>
  );
};
