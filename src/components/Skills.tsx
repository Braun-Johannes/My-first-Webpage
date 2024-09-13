import "./Styles/Card.css";

export default function Skills({
  imageSrc,
  topic,
  alt,
}: {
  imageSrc: string;
  topic: string;
  alt: string;
}) {
  return (
    <div className="cardContainer">
      <h2 className="cardTopic">{topic}</h2>
      <div className="cardImageContainer">
        <img className="cardImage" src={imageSrc} alt={alt} />
      </div>
      <div className="cardTextContainer">
        <h2 className="cardText">
          Design sowie Entwicklung des Frontend-Applikationen:
        </h2>
        <h3 className="cardText">Programmiersprachen:</h3>
        <p className="cardText">Typescript, JavaScript, HTML, CSS, SCSS </p>
        <hr className="line" />
        <h2 className="cardText">Implementierung des Backend:</h2>
        <p className="cardText">RESTful APIs, Routing, DB Schemas and Models</p>
        <hr className="line" />
        <h2 className="cardText">Know-How:</h2>
        <p className="cardText">
          Git, Github, React, Next.js, Vite.js, Node.js, MongoDB
        </p>
      </div>
    </div>
  );
}
