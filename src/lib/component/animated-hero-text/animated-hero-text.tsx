import { motion } from "framer-motion";
import React, { Fragment } from "react";
import styled from "styled-components";

type AnimatedHeroTextProps = {
  children: string;
};

const WordWrapper = styled.div`
  display: inline-block;
`;

const randVal = (min: number, max: number): number => {
    return min + (Math.random() * (max - min))
}

export const AnimatedHeroText = ({ children }: AnimatedHeroTextProps) => {
  const words = children.split(" ");

  return words.map(word => (
    <WordWrapper>
      {word.split("").map(character => (
        <motion.span
          style={{ display: "inline-block", originX: 'center', originY: 'center' }}
          animate={{
              rotate: [randVal(0, 180), 0],
              x: [randVal(0, 100) * randVal(-1, 1), 0],
              y: [randVal(0, 100) * randVal(-1, 1), 0],
              opacity: [0, randVal(0, 1), 1]
          }}
          transition={{ duration: randVal(.5, 3), ease: "anticipate" }}
        >
            {character}

        </motion.span>
      ))}
      <motion.span
          style={{ display: "inline-block" }}
          animate={{ rotate: 0 }}
          transition={{ duration: 2 }}
          dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
      />
    </WordWrapper>
  ));
};
