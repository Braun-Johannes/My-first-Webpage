import "./Styles/Card.css";

export default function Personal({
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
        <p className="cardText">Name: Braun</p>
        <p className="cardText">Vorname: Johannes</p>
        <p className="cardText">Geburtsjahr: 1992 </p>
        <p className="cardText">Staatsangehörigkeit: deutsch</p>
        <p className="cardText">Sprachen: </p>
        <p className="cardText">Deutsch (Muttersprache)</p>
        <p className="cardText">Englisch (Verhandlungssicher)</p>
      </div>
    </div>
  );
}
