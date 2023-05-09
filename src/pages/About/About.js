import Header from "../../components/Header" 
import Footer from "../../components/Footer"
import Aboutbanner from "../../components/Aboutbanner"
import Collapse from "../../components/Collapse"

function About(){

    return ( 
        <div className="aboutPage">
       <Header/>     
       <Aboutbanner/>
      <Collapse/>
       <Footer/>
       </div>
    )
    }

export default About;