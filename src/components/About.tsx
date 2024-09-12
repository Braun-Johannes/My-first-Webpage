import "./Styles/About.css";

export default function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="stickPlace">
          <div className="stick animated fadeInLeft"></div>
          <h2 className="name">Johannes Braun</h2>
          <div className="stick animated fadeInRight"></div>
        </div>
        <p className="description">
          Ihr Full-Stack Web Developer des Vertrauens
        </p>
      </div>
    </>
  );
}
