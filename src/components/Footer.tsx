import "./Styles/Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleClickDatenschutz = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    navigate("/datenschutz");
  };
  const handleClickImpressum = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/impressum");
  };

  return (
    <div className="container">
      <button id="datenschutz" onClick={handleClickDatenschutz}>
        Datenschutz
      </button>
      <button id="impressum" onClick={handleClickImpressum}>
        Impressum
      </button>
    </div>
  );
}
