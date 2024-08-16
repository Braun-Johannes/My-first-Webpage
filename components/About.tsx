import styled from "styled-components";

export default function About() {
    return (
        <>
        <h1>About me</h1>
        <AboutContainer>
            <h2>My name is Jeff</h2>
        </AboutContainer>    
        </>
    )
}

const AboutContainer =styled.div`
  width: 80%;
  height: 33vh;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #000;
  box-sizing: border-box;
`