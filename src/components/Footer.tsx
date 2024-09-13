import "./Styles/Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  function handleClickDatenschutz(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    window.scrollTo(0, 0);
    navigate("/home/datenschutz");
  }

  function handleClickImpressum(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    window.scrollTo(0, 0);
    navigate("/home/impressum");
  }

  return (
    <div className="container">
      <button
        className="footer"
        id="datenschutz"
        onClick={(event) => handleClickDatenschutz(event)}
      >
        Datenschutz
      </button>
      <button
        className="footer"
        id="impressum"
        onClick={(event) => handleClickImpressum(event)}
      >
        Impressum
      </button>
    </div>
  );
}
