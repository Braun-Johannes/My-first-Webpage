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

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  border-radius: 30px;
  width: 90vw;
  max-width: 600px;
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 20px auto;
  position: relative;

  box-sizing: border-box;
  background: #343544;

  @media (max-width: 768px) {
    width: 95vw;
    height: auto;
    margin: 10px auto;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: auto;
    margin: 10px auto;
  }

  @media (max-width: 375px) and (max-height: 667px) {
    width: 100vw;
    height: auto;
    margin: 10px auto;
  }
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
  width: 20vw;
  max-width: 100px;
  height: auto;
  margin: 10px;

  @media (max-width: 768px) {
    max-width: 10vw;
  }

  @media (max-width: 480px) {
    width: 10vw;
  }

  @media (max-width: 375px) and (max-height: 667px) {
    width: 10vw;
  }
`;

const PostTextContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const PostText = styled.p`
  padding: 10px;
  white-space: pre-wrap;
  text-align: center;
  font-size: 1rem;

  @media (max-width: 375px) and (max-height: 667px) {
    font-size: 1rem;
  }
`;

const PostTopic = styled.h2`
  display: flex;
  margin: 10px;
  text-align: center;

  @media (max-width: 375px) and (max-height: 667px) {
    font-size: 1.7rem;
  }
`;
