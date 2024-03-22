import AboutImg from "../../public/images/image-about-us.png";
import "../styles/about.css";

function Card() {
  return (
    <div className="container-fluid about d-flex">
      <div className="container-img">
        <img src={AboutImg} className="img-fluid about-img" alt="About-img" />
      </div>
      <div className="text-container">
        <h2 id="about-title">Qui sommes-nous ?</h2>
        <p>
          Bienvenue chez Café Neko, l'endroit où le café et les chats se
          rencontrent pour créer une expérience unique en son genre.<br/><br/> Chez Café
          Neko, nous sommes passionnés par deux choses : le café de qualité et
          le bien-être des chats. Fondé par des amoureux des félins et des
          aficionados du café, Café Neko est bien plus qu'un simple café. C'est
          un refuge pour les amoureux des chats, un havre de paix où l'on peut
          savourer une bonne tasse de café tout en câlinant nos adorables
          résidents à quatre pattes.
        </p>
      </div>
    </div>
  );
}

export default Card;
