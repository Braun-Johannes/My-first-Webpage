import "./Styles/Datenschutz.css";
import "./Styles/Footer.css";
import { useNavigate } from "react-router-dom";

export default function Datenschutz() {
  const navigate = useNavigate();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    window.scrollTo(0, 0);
    navigate("/home/");
  }

  return (
    <div className="containerDatenschutz">
      <h1 className="topic">Impressum</h1>
      <h3>
        Johannes Braun
        <br />
        Im Taubentanz 4
        <br />
        63538 Großkrotzenburg
      </h3>
      <h2>Kontakt</h2>
      <h3>
        Telefon: +49 15738124461
        <br />
        E-Mail: Braun-Johannes@outlook.de
      </h3>
      <h2>Vertreten durch:</h2>
      <h3>Johannes Braun</h3>
      <button className="footer" onClick={handleClick}>
        Startseite
      </button>
    </div>
  );
}
