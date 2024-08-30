import styled from "styled-components";

export default function Showcase() {
  return (
    <>
      <h1>My Projects</h1>
      <ShowcaseContainer>
        <h2>My projects name is &quot;Jeffs World&quot;</h2>
      </ShowcaseContainer>
    </>
  );
}

const ShowcaseContainer = styled.div`
  width: 80%;
  height: 33vh;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #000;
  box-sizing: border-box;
`;
