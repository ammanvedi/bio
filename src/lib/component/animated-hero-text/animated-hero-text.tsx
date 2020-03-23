import {motion} from "framer-motion";
import React, {Fragment} from "react";
import styled from "styled-components";
import {randVal} from "~lib/helper/random";

type AnimatedHeroTextProps = {
  children: string;
};

const WordWrapper = styled.div`
  display: inline-block;
`;

const Character = styled(motion.div)`
  position: relative;
`;

const CharacterAberration = styled(motion.span)`
  position: absolute;
  left: 0;
`;

export const AnimatedHeroText = ({ children }: AnimatedHeroTextProps) => {
  const words = children.split(" ");

  return (
    <Fragment>
      {words.map(word => (
        <WordWrapper>
          {word.split("").map(character => (
            <Character
              style={{
                display: "inline-block",
                originX: "center",
                originY: "center"
              }}
              animate={{
                scale: [randVal(0, 0.5), 1],
                rotate: [randVal(0, 360), 0],
                x: [randVal(0, 200) * randVal(-1, 1), 0],
                y: [randVal(0, 200) * randVal(-1, 1), 0],
                opacity: [0, randVal(0, 1), 1]
              }}
              transition={{ duration: randVal(0.5, 3), ease: "anticipate" }}
            >
              {character}
            </Character>
          ))}
          <motion.span
            style={{ display: "inline-block" }}
            animate={{ rotate: 0 }}
            transition={{ duration: 2 }}
            dangerouslySetInnerHTML={{ __html: "&nbsp;" }}
          />
        </WordWrapper>
      ))}
    </Fragment>
  );
};
