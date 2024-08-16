import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContainer>
        <Logo>logo</Logo>
        <br />
        <Title>Your trusted Full Stack Web Dev</Title>
      </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;

`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;