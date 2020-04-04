import React from "react";
import styled, { css } from "styled-components";
import {TitleHero} from "~lib/component/title-hero/TitleHero";

const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.Primary};
    color: ${theme.colors.PrimaryText};
  `}
`;

export const App = () => {
  return (
      <div>
        <TitleHero />
      </div>
  );
};
