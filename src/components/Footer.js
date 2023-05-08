import Footerimage from "../assets/images/LOGOfooterLogo.png";
function Footer(){

    return (
    <footer>
    <img src={Footerimage} alt="logo de kasa" className="footerImg"/>
    <p>© 2020 Kasa. All rights reserved</p>
    </footer>
    )
}

export default Footer;