import styled from "styled-components";

export default function Posts({ text, imageSrc } : {text: any, imageSrc: any}) {
    return (
        <PostContainer>
            <PostImage src={imageSrc} alt={text} />
            <PostText>{text}</PostText>
        </PostContainer>
    )
}

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    width: 33%;
    height: 33vh;
    overflow: auto;
    margin:20px;
    `;

const PostImage = styled.img`
width: 100px;
height: 100px;
margin: 10px;
`;

const PostText = styled.p`
padding: 10px;
`;

