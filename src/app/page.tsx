"use client";
import "./globals.css";
import styled from "styled-components";
import Posts from "../../components/Posts";
import Header from "../../components/Header";
import About from "../../components/About";
import Showcase from "../../components/Showcase";
import Contact from "../../components/Contact";
import Separator from "../../components/Styles/Separator";
import { useEffect, useState } from "react";

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState("grey");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      setTimeout(() => {
        setBackgroundImage("blue");
      }, 1000);
    }, 1000);
  }, []);

  return (
    <HomePageContainer $backgroundImage={backgroundImage}>
      <Header show={show} />
      <About show={show} />

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
          imageSrc="https://via.placeholder.com/150"
        />
        <Posts
          topic="Zusammenfassung"
          text={`Motivierter Junior Webentwickler mit Ausbildung und Erfahrung in der	Erstellung dynamischer Webanwendungen mit JavaScript,	HTML, CSS und REACT. Umfangreicher Hintergrund in der 	Front-End- und Back-End-Entwicklung mit einer Leidenschaft für 	kontinuierliches Lernen und Verbesserung.`}
          imageSrc="https://via.placeholder.com/150"
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
          imageSrc="https://via.placeholder.com/150"
        ></Posts>
        <Posts
          topic="Kompetenzen"
          text={`- Design sowie Entwicklung des Frontend-Applikationen 
( HTML, CSS, JavaScript, React, Next.js )
\n
- Implementierung des Backend 
( Node.js, Routing, DB Schemas und Models, Deployment )
\n
- UI/UX Basics 
( Wireframes, Mock-ups, Usability-Tests )" imageSrc="https://via.placeholder.com/150`}
          imageSrc="https://via.placeholder.com/150"
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

const HomePageContainer = styled.div<{ $backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-image: ${({ $backgroundImage }) => $backgroundImage};
  transition: background-color 1s ease;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
