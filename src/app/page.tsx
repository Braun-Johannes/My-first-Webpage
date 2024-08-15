"use client"
import styled from "styled-components";
import Posts from "../../components/Posts";
import NavBar from "../../components/NavBar";

export default function Home() {
  return (
<HomePageContainer>
<NavBar />
<PostsContainer>
<Posts text="So this is my first Post on my first webpage. You like? Now i need to find out how it would look if i am going to pass a whole novel in here. Because the longer this gets, the better you can find some issues within." imageSrc="https://via.placeholder.com/150" />
<Posts text="But sometimes they only accure with less." imageSrc="https://via.placeholder.com/150" />
<Posts text="And in special cases only with the exact amount." imageSrc="https://via.placeholder.com/150" />
<Posts text="So this is my first Post on my first webpage. You like? Now i need to find out how it would look if i am going to pass a whole novel in here. Because the longer this gets, the better you can find some issues within. And sometimes you got to go crazy wild brokkoli, sausage, panda, racoon style on it. Only to check a simple feature like this one right here!" imageSrc="https://via.placeholder.com/150" />
<Posts text="So this is my first Post on my first webpage. You like? Now i need to find out how it would look if i am going to pass a whole novel in here. Because the longer this gets, the better you can find some issues within." imageSrc="https://via.placeholder.com/150" />
<Posts text="So this is my first Post on my first webpage. You like? Now i need to find out how it would look if i am going to pass a whole novel in here. Because the longer this gets, the better you can find some issues within." imageSrc="https://via.placeholder.com/150" />
<Posts text="So this is my first Post on my first webpage. You like? Now i need to find out how it would look if i am going to pass a whole novel in here. Because the longer this gets, the better you can find some issues within." imageSrc="https://via.placeholder.com/150" />
</PostsContainer>
</HomePageContainer>

  );
}

const HomePageContainer = styled.div`
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
`;

const PostsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 100%;
margin-top: 20px;`;