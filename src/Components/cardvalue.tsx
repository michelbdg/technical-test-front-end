import CatSvg from "../../public/icons/cat-icon.svg";
import CoffeeSvg from "../../public/icons/coffee-icon.svg";
import PlantSvg from "../../public/icons/plant-icon.svg";
import "../styles/cardvalue.css";

function CardValue() {
  return (
    <div className="container-fluid card-value">
      <h2 id="card-value-title">Nos valeurs</h2>
      <div className="card-value-grid">
        <div className="card-value-card">
          <img src={CatSvg} alt="cat-svg" />
          <h3>Passionné de Café</h3>
          <p>
            Notre équipe est passionnée par l'art de préparer le café. Chaque
            grain est soigneusement sélectionné pour offrir une expérience
            gustative exceptionnelle. Nous nous engageons à vous offrir des
            saveurs riches et uniques dans chaque tasse.
          </p>
        </div>
        <div className="card-value-card">
          <img src={CoffeeSvg} alt="cofee-svg" />
          <h3>Bien-être des Chats</h3>
          <p>
            Le bonheur et le bien-être de nos amis félins sont au cœur de
            notre philosophie. Nous offrons un environnement sûr et confortable
            à nos chats résidents, où ils peuvent interagir avec nos clients
            et recevoir toute l'attention et l'affection qu'ils méritent.
          </p>
        </div>
        <div className="card-value-card">
          <img src={PlantSvg} alt="plant-svg" />
          <h3>Engagement Environnemental</h3>
          <p>
            Nous sommes soucieux de l'impact environnemental de notre
            entreprise. C'est pourquoi nous nous engageons à utiliser des
            produits respectueux de l'environnement et à promouvoir des
            pratiques durables dans tous les aspects de notre activité, de la
            sélection des fournisseurs à la gestion des déchets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardValue;
