import Header from "../../components/Header";  
import Footer from "../../components/Footer";
import { useParams } from 'react-router-dom';
import lodgingsdatas from "../../datas/lodgingsdatas";
import Collapse from "../../components/Collapse";
import Carrousel from "../../components/Carrousel";

function Lodgingpage(){
    const { id } = useParams();
    const lodgingdata = lodgingsdatas.find(lodging => lodging.id === id);
    const carouselDatas = []; 
    for (let i =0 ; i < lodgingdata.pictures.length ; i++)
{ 
    carouselDatas.push(lodgingdata.pictures[i])
} 
console.log(carouselDatas);
          
      
    return(
        <div className="lodgingPage">
        <Header/>
        <Carrousel images={carouselDatas} />
        <section className="lodgingSelected"> 
        <div className="lodgingBloc">
        <article>
      <h1>{lodgingdata.title}</h1>
      <p>{lodgingdata.location}</p>
      <div className="tags">
        {lodgingdata.tags.map(tag=>(
            <span className="tag">{tag}</span>
        ))}
      </div>
      </article>
      <article>
        <span className='hostDatas'>
      <p>{lodgingdata.host.name}</p>
      <img src={lodgingdata.host.picture} alt="hôte de l'appartement"/>
      </span>
      </article>
      </div>
      </section>
      <section className="lodgingCollapses">
      <div className="lodgingCollapseCards">
      <Collapse className="lodgingCollapse" title="Description" content={lodgingdata.description}/>
      </div> 
      <div className="lodgingCollapseCards">
      <Collapse id="lodgingCollapse" title="Equipements" content={lodgingdata.equipments}/>
      </div>
      </section>
        <Footer/>
        </div>
    )
}

export default Lodgingpage;