import "./Styles/Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  function handleClickDatenschutz(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    window.scrollTo(0, 0);
    navigate("/datenschutz");
  }

  function handleClickImpressum(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    window.scrollTo(0, 0);
    navigate("/impressum");
  }

  return (
    <div className="container">
      <button
        className="footer"
        id="datenschutz"
        onClick={handleClickDatenschutz}
      >
        Datenschutz
      </button>
      <button className="footer" id="impressum" onClick={handleClickImpressum}>
        Impressum
      </button>
    </div>
  );
}
