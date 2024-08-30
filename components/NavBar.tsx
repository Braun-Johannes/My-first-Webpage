import styled from "styled-components";

export default function NavBar() {
  return (
    <NavbarContainer>
      <NavLinks href="#">Home</NavLinks>
      <NavLinks href="#">About me</NavLinks>
      <NavLinks href="#">My Projects</NavLinks>
      <NavLinks href="#">Contact</NavLinks>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const NavLinks = styled.a`
  margin: 0 10px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;
