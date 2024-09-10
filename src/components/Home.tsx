import styled from "styled-components";
import Header from "./Header.tsx";
import About from "./About.tsx";
import Separator from "./Styles/Separator.tsx";
import Posts from "./Posts.tsx";
import Showcase from "./Showcase.tsx";
import Contact from "./Contact.tsx";

export default function Home() {
  return (
    <HomePageContainer>
      <Header />
      <About />
      <Separator />
      <h1>About me</h1>
      <PostsContainer>
        <Posts
          topic="Persönliche Daten"
          text={`Name:\t\t\t\t\tBraun

Vorname:\t\t\t\t\tJohannes

Geburtsjahr:\t\t\t\t1992

Staatsangehörigkeit:\t\tdeutsch

Sprachen:\n\n\tDeutsch (Muttersprache)\n\tEnglisch (Verhandlungssicher)`}
          imageSrc="images/package-icon.png.png"
          alt="Placeholder image für Persönliche Daten"
        />
        <Posts
          topic="Zusammenfassung"
          text={`Motivierter Junior Webentwickler mit Ausbildung und Erfahrung in der Erstellung dynamischer Webanwendungen mit JavaScript, HTML, CSS und REACT. Umfangreicher Hintergrund in der Front-End- und Back-End-Entwicklung mit einer Leidenschaft für kontinuierliches Lernen und Verbesserung.`}
          imageSrc="images/json-icon.png.png"
          alt="Placeholder image für Zusammenfassung"
        />
        <Posts
          topic="5-Jahres Rückblick"
          text={`03.2024 – 06.2024
neueFische GmbH, Hamburg 

Aus -/ Weiterbildung zum Web Developer

-----------------------------------------------

08.2022 – 06.2023
Fachoberschule, Eugen-Kaiser-Schule

Abschluss: Fachhochschulreife - 
Sozialwesen
-----------------------------------------------

11.2019 – 08.2022
CWS Fire Safety , Niederlassung Dreieich

Servicetechniker im verbeugenden 
Brandschutz
            `}
          imageSrc="images/script-icon.png.png"
          alt="Placeholder image für 5-Jahres Rückblick "
        />
        <Posts
          topic="Kompetenzen"
          text={`- Design sowie Entwicklung des Frontend-Applikationen 
( HTML, CSS, JavaScript, React, Next.js )
\n
- Implementierung des Backend 
( Node.js, RESTful APIs, Routing, DB Schemas und Models, Deployment )
\n
- UI/UX Basics 
( Wireframes, Mock-ups, Usability-Tests ) `}
          imageSrc="images/xml-icon.png.png"
          alt="Placeholder image für Kompetenzen "
        />
      </PostsContainer>
      <Separator />
      <Showcase />
      <Separator />
      <Contact />
      <Separator />
    </HomePageContainer>
  );
}

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background-image: "grey";
  transition: background-color 1s ease;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
