import "./Styles/Card.css";

export default function Summary({
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
        <p className="cardText">
          Motivierter Webentwickler mit Ausbildung und Erfahrung in der
          Erstellung dynamischer Webanwendungen mit JavaScript, HTML, CSS und
          REACT. Umfangreicher Hintergrund in der Front-End- und
          Back-End-Entwicklung mit einer Leidenschaft für kontinuierliches
          Lernen und Verbesserung.
        </p>
      </div>
    </div>
  );
}
