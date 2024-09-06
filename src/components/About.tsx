import styled, { keyframes } from "styled-components";

export default function About() {
  return (
    <>
      <AboutContainer aria-labelledby="about-heading">
        <Name id="about-heading">Johannes Braun</Name>
        <Description>
          Ihr Junior Full-Stack Web Developer des Vertrauens
        </Description>
      </AboutContainer>
    </>
  );
}

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const AboutContainer = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  transition: opacity 1s ease;
  animation: ${fadeIn} 1s ease;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }

  @media (max-width: 523px) {
    width: 95%;
    padding: 10px;
  }
`;

const slideInBefore = keyframes`
    0% {
        left: -200%;
    }
    100% {
        left: -110%;
    }
`;

const slideInAfter = keyframes`
    0% {
        right: -200%;
    }
    100% {
        right: -110%;
    }
`;

const Name = styled.h2`
  position: relative;
  padding: 5px;
  text-align: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 100%;
    height: 2px;
    background-color: #ffffff;
  }

  &::before {
    left: -110%;
    animation: ${slideInBefore} 5s ease-out forwards;
  }

  &::after {
    right: -110%;
    animation: ${slideInAfter} 5s ease-out forwards;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 523px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 523px) {
    font-size: 0.9rem;
  }
`;
