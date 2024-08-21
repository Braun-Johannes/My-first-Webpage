import styled from "styled-components";

export default function About() {
    return (
        <>
        <h1>About me</h1>
        <AboutContainer>
            <Name>Johannes Braun</Name>
            <p>Ihr Full-Stack Web Developer des Vertrauens</p>
        </AboutContainer>    
        </>
    )
}

const AboutContainer =styled.div`
  width: 80%;
  height: 33vh;
  margin: 0 auto;
  padding: 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
  box-sizing: border-box;
  border: 1px solid #000;
`;

const Name = styled.h2`
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
`;  