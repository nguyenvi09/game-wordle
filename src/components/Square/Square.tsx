import React from "react";
import "./square.css";
import { motion } from "framer-motion";

interface IProps {
  val: string;
  squareIndex: number;
}
const Square: React.FC<IProps> = ({ val, squareIndex }) => {
  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
  };

  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants}>
      <div className="square">{val}</div>
    </motion.div>
  );
};

export default Square;
