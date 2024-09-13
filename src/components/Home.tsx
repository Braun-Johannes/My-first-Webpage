import styled from "styled-components";
import Header from "./Header.tsx";
import About from "./About.tsx";
import Separator from "./Styles/Separator.tsx";
import Showcase from "./Showcase.tsx";
import Contact from "./Contact.tsx";
import Footer from "./Footer.tsx";
import Personal from "./Personal.tsx";

export default function Home() {
  return (
    <HomePageContainer>
      <Header />
      <About />
      <Separator />
      <h1>About me</h1>
      <PostsContainer>
        <Personal
          topic="Persönliche Daten"
          imageSrc="images/package-icon.png.png"
          alt="Placeholder image für Persönliche Daten"
        />
      </PostsContainer>
      <Separator />
      <Showcase />
      <Separator />
      <Contact />
      <Separator />
      <Footer />
    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: "grey";
  transition: background-color 1s ease;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
