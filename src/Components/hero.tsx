import CatImg from "../../public/images/cat-hero-section.png";
import "../styles/hero.css";

function Hero() {
  return (
    <div className="d-flex justify-content-center">
    <div className="container-fluid d-flex p-5">
      <div className="hero-content">
        <div className="text-container">
          <h1>Bienvenue chez Café Néko</h1>
          <p>L'endroit où le café rencontre les ronronnements</p>
          <p>
            Bienvenue dans notre univers où chaque tasse de café est
            accompagnée d'une dose d'amour félin.
          </p>
          <button type="button" className="button">
            Nous contacter
          </button>
        </div>
      </div>
      <div className="hero-img">
        <img className="img-fluid" src={CatImg} alt="cat-logo" />
      </div>
    </div>
    </div>
  );
}

export default Hero;
