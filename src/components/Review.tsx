import "./Styles/Card.css";

export default function Review({
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
          03.2024 – 06.2024 <br />
          neueFische GmbH, Hamburg
          <br />
          <br />
          Aus -/ Weiterbildung zum Web Developer
        </p>
        <hr className="line" />
        <p className="cardText">
          08.2022 – 06.2023 <br />
          Fachoberschule, Eugen-Kaiser-Schule
          <br />
          <br />
          Abschluss: Fachhochschulreife - Sozialwesen
        </p>
        <hr className="line" />
        <p className="cardText">
          11.2019 – 08.2022 <br />
          CWS Fire Safety , Niederlassung Dreieich
          <br />
          <br />
          Servicetechniker im verbeugenden Brandschutz
        </p>
      </div>
    </div>
  );
}
