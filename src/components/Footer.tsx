import "./Styles/Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/datenschutz");
  };

  return (
    <div className="container">
      <button id="datenschutz" onClick={handleClick}>
        Datenschutz
      </button>
    </div>
  );
}
