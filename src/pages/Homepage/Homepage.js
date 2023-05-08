import Herobanner from '../../components/Herobanner'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Cardscontainer from '../../components/Cardscontainer'
import Lodgingscards from '../../components/Lodgingscards'
function Homepage(){

return ( 
    <div className="homePage">
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