import styled, { keyframes } from "styled-components";

export default function Header({ show }: { show: boolean }) {
  return (
    <HeaderContainer $show={show} role="banner">
      <StyledImage src="/images/Logo.png" alt="Logo" />
      <Title>Bringing your ideas to life</Title>
    </HeaderContainer>
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

const HeaderContainer = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: rgb(0, 0, 0, 0.8);

  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  transition: opacity 1s ease;
  animation: ${({ $show }) => ($show ? fadeIn : "none")} 1s ease;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const StyledImage = styled.img`
  margin: 10px;
  width: 80px;
  height: 80px;
`;
