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
          Als Full-Stack Webentwickler konzipiere und entwickle ich vollständig
          skalierbare Webanwendungen, die sowohl im Frontend als auch im Backend
          nahtlos ineinandergreifen. Im Frontend liegt mein Fokus auf der
          Erstellung nutzerzentrierter, responsiver Interfaces, die auf
          Performance und Benutzerfreundlichkeit optimiert sind.
          <br />
          <br />
          Im Backend entwickle ich robuste, sichere und flexible Architekturen,
          die reibungslose Datenverarbeitung und -speicherung ermöglichen. Durch
          mein tiefes Verständnis von API-Entwicklung und Datenbankdesign kann
          ich Projekte effizient umsetzen und maßgeschneiderte Lösungen für
          spezifische Anforderungen bieten.
          <br />
          <br />
          Mit meiner Erfahrung bin ich für Unternehmen interessant, die auf der
          Suche nach einem Entwickler sind, der nicht nur Code schreibt, sondern
          komplette Anwendungen erstellt und dabei sowohl die Benutzererfahrung
          als auch die Systemperformance maximiert.
        </p>
      </div>
    </div>
  );
}
