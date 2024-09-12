import { useNavigate } from "react-router-dom";

export default function Datenschutz() {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/home/");
  };

  return (
    <div>
      <h1>Datenschutz</h1>
      <p>Content</p>
      <button onClick={handleClick}>Back to Home</button>
    </div>
  );
}
