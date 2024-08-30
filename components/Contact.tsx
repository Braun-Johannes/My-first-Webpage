import styled from "styled-components";

export default function Contact() {
  return (
    <>
      <h1>Contact me</h1>
      <ContactContainer>
        <h2>Sie möchten mit mir in Kontakt treten?</h2>
        <p>
          Schreiben Sie mir eine E-Mail an:
          <br />
          <br />
          Braun-Johannes@outlook.de
        </p>
        <p>
          Oder rufen sie mich an unter:
          <br />
          <br />
          015738124461
        </p>
      </ContactContainer>
    </>
  );
}

const ContactContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #000;
  box-sizing: border-box;
  text-align: center;
`;
