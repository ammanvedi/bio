import styled from "styled-components";
import { randVal } from "~lib/helper/random";
import React from "react";
import { motion } from "framer-motion";

const Wrapper = styled(motion.div)`
  font-size: 6rem;
  position: absolute;
  left: 0;
  color: ${({ theme }) => theme.colors.PrimaryText};
  font-family: "Helvetica Neue";
`;

type FloatingCharacterProps = {
  children: string;
};

export const FloatingCharacter = ({ children }: FloatingCharacterProps) => (
  <Wrapper
    style={{
      fontSize: `${randVal(3, 7)}rem`
    }}
    animate={{
      opacity: [0, 0.2, 0],
      scale: [1, randVal(0, 0.5)],
      top: ["90%", "-10%"],
      x: [randVal(0, window.innerWidth), randVal(0, window.innerWidth)],
      rotate: [randVal(0, 360), 0]
    }}
    transition={{
      duration: randVal(10, 10),
      ease: "easeIn",
      loop: "Infinity",
      delay: randVal(0, 10)
    }}
  >
    {children}
  </Wrapper>
);
