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
<h1>Whats new?</h1>
<PostsContainer>
<Posts text="So this is my first Post on my first webpage. You like? Now i need to find out how it would look if i am going to pass a whole novel in here. Because the longer this gets, the better you can find some issues within." imageSrc="https://ih1.redbubble.net/image.3725339929.5984/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg" />
<Posts text="So this is my first Post on my first webpage. You like? Now i need to find out how it would look if i am going to pass a whole novel in here. Because the longer this gets, the better you can find some issues within. And sometimes you got to go crazy wild brokkoli, sausage, panda, racoon style on it. Only to check a simple feature like this one right here! asdasdsadadsaddsdasdasdasdasdasdasdasdasdasdasdasdasdasdasdsaasdasdasdasddsaasdasdasdsa jaja" imageSrc="https://via.placeholder.com/150" />
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