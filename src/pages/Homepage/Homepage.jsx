import Herobanner from "../../components/Herobanner";
import Cardscontainer from "../../components/Cardscontainer";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Lodgingscards from "../../components/Lodgingscards";
function Homepage(){

return ( 
    <div class="homePage">
   <Header />     
   <Herobanner />
   <Cardscontainer>
   <Lodgingscards/>
   </Cardscontainer>
   <Footer />
   </div>
)
}

export default Homepage;