import Logo from "../../public/images/logo.svg";
import "../styles/header.css"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="img-fluid" src={Logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Qui sommes-nous ?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nos valeurs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="reserve" href="#">Réservez !</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
