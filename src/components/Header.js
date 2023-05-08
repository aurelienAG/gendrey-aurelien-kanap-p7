import logoKasa from "../assets/images/logo.png";
function Header(){
    return (
    <header className="d-flex">
        <img className = "logo" src={logoKasa}
        alt="logo kasa"/> 
        <nav>
        <ul className="d-flex">
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
        </nav>
  </header>
    );  
  }
    export default Header;