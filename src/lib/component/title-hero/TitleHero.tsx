import React from "react";
import styled, { css } from "styled-components";
import { AnimatedHeroText } from "~lib/component/animated-hero-text/animated-hero-text";
import { FloatingCharacter } from "~lib/component/floating-character/FloatingCharacter";

const Wrapper = styled.section`
  height: 100vh;
  overflow: hidden;
  width: 100%;
  padding: 10rem 3rem 2rem;
  background-color: ${({ theme }) => theme.colors.Primary};
  position: relative;
`;

const TitleContainer = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.PrimaryText};
`;

const SubheadingContainer = styled.h2`
  margin-left: 1rem;
  font-size: 2rem;
  line-height: 3rem;
  font-family: "Helvetica Neue";
  font-weight: 500;
  color: ${({ theme }) => theme.colors.PrimaryText};
  opacity: 0.8;
`;

const SubheadingLine = styled.div`
  
  display: block;
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
        <SubheadingLine>
          <AnimatedHeroText>amman vedi</AnimatedHeroText>
        </SubheadingLine>
        <SubheadingLine>
          <AnimatedHeroText>london based</AnimatedHeroText>
        </SubheadingLine>
        <SubheadingLine>
          <AnimatedHeroText>web developer</AnimatedHeroText>
        </SubheadingLine>
      </SubheadingContainer>
        <SubheadingContainer>
            <AnimatedHeroText>
                Senior developer at Lifeworks, previously of Pulselive.
            </AnimatedHeroText>
        </SubheadingContainer>

      <FloatingCharacter>{"{"}</FloatingCharacter>
      <FloatingCharacter>{";"}</FloatingCharacter>
      <FloatingCharacter>{"=>"}</FloatingCharacter>
      <FloatingCharacter>{"}"}</FloatingCharacter>
      <FloatingCharacter>{")"}</FloatingCharacter>
      <FloatingCharacter>{"("}</FloatingCharacter>
      <FloatingCharacter>{"{"}</FloatingCharacter>
      <FloatingCharacter>{";"}</FloatingCharacter>
      <FloatingCharacter>{"=>"}</FloatingCharacter>
      <FloatingCharacter>{"}"}</FloatingCharacter>
      <FloatingCharacter>{")"}</FloatingCharacter>
      <FloatingCharacter>{"NaN"}</FloatingCharacter>
    </Wrapper>
  );
};
