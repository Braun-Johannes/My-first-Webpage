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
          <a href="mailto:braun-johannes@outlook.de">
            braun-johannes@outlook.de
          </a>
        </p>
        <p>Oder rufen sie mich an unter:</p>
        <a href="tel: +49 15738124461"> +49 15738124461</a>
      </ContactContainer>
    </>
  );
}

const ContactContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 15px;
  background: #343544;
`;
