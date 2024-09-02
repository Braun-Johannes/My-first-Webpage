import styled from "styled-components";

export default function Posts({
  text,
  imageSrc,
  topic,
  alt,
}: {
  text: string;
  imageSrc: string;
  topic: string;
  alt: string;
}) {
  return (
    <PostContainer>
      <PostTopic>{topic}</PostTopic>
      <PostImageContainer>
        <PostImage src={imageSrc} alt={alt} />
      </PostImageContainer>
      <PostTextContainer>
        <PostText>{text}</PostText>
      </PostTextContainer>
    </PostContainer>
  );
}

// <PostText dangerouslySetInnerHTML={{ __html: text }} />
// to use bold and other on the Text

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  width: 33%;
  height: 33vh;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 20px;
  position: relative;
`;

const PostImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
`;

const PostImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const PostTextContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const PostText = styled.p`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  white-space: pre-wrap;
`;

const PostTopic = styled.h2`
  display: flex;
  margin: 10px;
`;
