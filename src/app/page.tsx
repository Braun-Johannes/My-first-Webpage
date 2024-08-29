"use client"
import './globals.css';
import styled from "styled-components";
import Posts from "../../components/Posts";
import Header from "../../components/Header";
import About from "../../components/About";
import Showcase from "../../components/Showcase";
import Contact from "../../components/Contact";
import { useEffect, useState } from 'react';

export default function Home() {
const [backgroundImage, setBackgroundImage] = useState("grey");
const [show, setShow] = useState(false);


useEffect(() => {
  setTimeout(() => {
    setShow(true);
      setTimeout(() => {
        setBackgroundImage('blue');
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
<Posts topic="Persönliche Daten" text={`Name: Braun\nVorname: Johannes\nGeburtsjahr: 1992\nStaatsangehörigkeit: deutsch\nSprachen:\nDeutsch (Muttersprache)\nEnglisch (Verhandlungssicher)`}  imageSrc="https://ih1.redbubble.net/image.3725339929.5984/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg" />
<Posts topic="Kompetenzen" text={`- Design sowie Entwicklung des Frontend-Applikationen 
( HTML, CSS, JavaScript, React, Next.js )
\n
- Implementierung des Backend 
( Node.js, Routing, DB Schemas und Models, Deployment )
\n
- UI/UX Basics 
( Wireframes, Mock-ups, Usability-Tests )" imageSrc="https://via.placeholder.com/150`} imageSrc="https://via.placeholder.com/150" />
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

const TopicsContainer = styled.div`
margin-top: 80px;
`; //Only holds the margin from the header

const Separator = styled.hr`
  width: 100%;
  border: 1px solid #000;
  margin: 20px 0;
`;