import React from "react";
import styled, { css } from "styled-components";
import { AnimatedHeroText } from "~lib/component/animated-hero-text/animated-hero-text";

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  padding: 10rem 3rem 2rem;
  background-color: ${({ theme }) => theme.colors.Primary};
`;

const TitleContainer = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.PrimaryText};
`;

const SubheadingContainer = styled.h2`
  margin-left: 1rem;
  font-size: 1.5rem;
  line-height: 4rem;
  font-style: inherit;
  letter-spacing: 14px;
  color: ${({ theme }) => theme.colors.PrimaryText};
  opacity: 0.8;
`;

const EqualsWrap = styled.span`
  font-family: "Helvetica Neue";
  font-weight: 100;
`;

export const TitleHero = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <AnimatedHeroText>self</AnimatedHeroText>{" "}
        <EqualsWrap>
          <AnimatedHeroText>=</AnimatedHeroText>
        </EqualsWrap>{" "}
        <AnimatedHeroText>this —</AnimatedHeroText>
      </TitleContainer>
      <SubheadingContainer>
        <AnimatedHeroText>
          I AM AMMAN VEDI, A WEB DEVELOPER LIVING IN LONDON
        </AnimatedHeroText>
      </SubheadingContainer>
    </Wrapper>
  );
};
