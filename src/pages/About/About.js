import Header from "../../components/Header"; 
import Footer from "../../components/Footer";
import Aboutbanner from "../../components/Aboutbanner";
import Collapse from "../../components/Collapse";
import aboutdatas from "../../datas/aboutdatas.json";

function About(){

    return ( 
        <div className="aboutPage">
       <Header/>     
       <Aboutbanner/>
       {aboutdatas.map(data => (
          <div className="aboutCollapseCards">
        <Collapse title={data.title} content={data.text}/>
        </div> 
       ))}
       <Footer/>
       </div>
    )
    }

export default About;