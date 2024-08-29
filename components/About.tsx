import styled, {keyframes} from "styled-components";

export default function About({show} : {show: boolean}) {
        return (
        <>
        <AboutContainer show={show}>
            <Name>Johannes Braun</Name>
            <p>Ihr Full-Stack Web Developer des Vertrauens</p>
        </AboutContainer>    
        </>
    )

}

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const AboutContainer =styled.div<{ show: boolean }>`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  box-sizing: border-box;

  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: visibility 1s ease;
  animation: ${({ show }) => (show ? fadeIn : 'none')} 1s ease;
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
        content: '';
        position: absolute;
        top: 50%;
        width: 100%;
        height: 2px;
        background-color: #ffffff;
    }

    &::before {
        left: -110%;
        animation: ${slideInBefore} 1s ease-out forwards;
    }

    &::after {
        right: -110%;
        animation: ${slideInAfter} 1s ease-out forwards;
    }
`;

