import logoKasa from "../assets/images/logo.png";
function Header(){
    return (
    <header class="d-flex">
        <img class = "logo" src={logoKasa}
        alt="logo kasa"/> 
        <nav>
        <ul class="d-flex">
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
        </nav>
  </header>
    );  
  }
    export default Header;