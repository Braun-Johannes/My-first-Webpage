import styled from "styled-components";
import Separator from "./Styles/Separator";

export default function Showcase() {
  return (
    <>
      <h1>My Projects</h1>
      <ShowcaseContainer>
        <ProjectTitle>&quot;Survival-Pets&quot;</ProjectTitle>
        <IframeContainer
          src="https://survival-pets.vercel.app/"
          title="Survival-Pets Project"
          aria-label="Survival-Pets Project"
        />
        <ProjectDescription>
          &quot;Survival-Pets&quot; ist das erste Projekt, das ich gemeinsam mit
          meinen Studienkollegen Felix, Alex und Jonas realisiert habe (vielen
          Dank für die tolle Zeit!). Dieses Projekt war unser Capstone-Projekt
          bei neueFische GmbH. &quot;Survival-Pets&quot; ist eine charmante
          virtuelle Haustierpflege-App, bei der die Nutzer ein Starter-Haustier
          auswählen und dessen tägliche Bedürfnisse erfüllen. Die
          benutzerfreundliche Oberfläche, die intuitiven Steuerungen und die
          liebevollen Animationen schaffen eine emotionale Bindung. Durch den
          realistischen Schwierigkeitsgrad wird die Pflege sowohl belohnend als
          auch berührend. Perfekt für alle Tierliebhaber! (Bitte beachten
          Sie,dass dies eine Demo-Version ist und daher alle Werte angepasst
          sind.)
        </ProjectDescription>
        <h3>Technologien</h3>
        <p>
          React, Next.js, Styled Components, MongoDB, Node.js & Express, Vercel
        </p>
        <h4>Repository:</h4>
        <RepositoryLink target="_blank" rel="noopener noreferrer" href="https://github.com/Braun-Johannes/Survival-Pets">
          Survival-Pets
        </RepositoryLink>
        <Separator />
      </ShowcaseContainer>
    </>
  );
}

const ShowcaseContainer = styled.div`
  width: 80%;
  padding: 20px;
  border-radius: 15px;
  background: #343544;
  box-sizing: border-box;

  @media (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`;

const ProjectTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5em;
  text-align: center;
`;

const ProjectDescription = styled.p`
  margin-bottom: 20px;
  font-size: 1em;
  padding: 10px;
  border-radius: 15px;
`;

const IframeContainer = styled.iframe`
  width: 100%;
  height: 100vh;
  border: none;
`;

const RepositoryLink = styled.a`
  color: #3b8383;
  text-decoration: none;
`;
