import logoKasa from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

function Header(){
    return (
    <header className="d-flex">
        <img className = "logo" src={logoKasa}
        alt="logo kasa"/> 
        <nav>
        <ul className="d-flex">
        <Link to="/" className="customLink"><li>Accueil</li></Link>
        <Link to="/about" className="customLink"><li>A propos</li></Link>
        </ul>
        </nav>
  </header>
    );  
  }
    export default Header;