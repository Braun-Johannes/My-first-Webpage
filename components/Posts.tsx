import styled from "styled-components";

export default function Posts({ text, imageSrc } : {text: any, imageSrc: any}) {
    return (
        <PostContainer>
            <PostImageContainer>
            <PostImage src={imageSrc} alt={text} />
            </PostImageContainer>
            <PostText>{text}</PostText>
        </PostContainer>
    )
}


const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Align content at the top */
    border: 1px solid black;
    width: 33%;
    height: 33vh;
    overflow-y: auto; /* Enable vertical scrolling */
    overflow-x: hidden; /* Disable horizontal scrolling */
    margin: 20px;
    position: relative;
`;

const PostImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    background: white; /* Optional: to avoid content behind the image */
    width: 100%; /* Ensure it takes full width */
`;

const PostImage = styled.img`
    width: 100px;
    height: 100px;
    margin: 10px;
`;

const PostTextContainer = styled.div`
    margin-top: 120px; /* Adjust margin to prevent text overlap */
    width: 100%; /* Ensure it takes full width */
`;

const PostText = styled.p`
    padding: 10px;
    width: 100%; /* Ensure text takes full width */
    box-sizing: border-box; /* Include padding in width calculation */
`;