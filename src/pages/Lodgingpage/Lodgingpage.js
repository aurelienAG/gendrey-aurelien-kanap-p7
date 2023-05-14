import Header from "../../components/Header";  
import Footer from "../../components/Footer";
import { useParams } from 'react-router-dom';
import lodgingsdatas from "../../datas/lodgingsdatas";
import Collapse from "../../components/Collapse";

function Lodgingpage(){
    const { id } = useParams();
    const lodgingdata = lodgingsdatas.find(lodging => lodging.id === id);
    return(
        <div className="lodgingPage">
        <Header/>
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
      <Collapse className="descriptionCollapse" title="Description" content={lodgingdata.description}/>
      <Collapse id="equipmentsCollapse" title="Equipements" content={lodgingdata.equipments}/>
      </section>
        <Footer/>
        </div>
    )
}

export default Lodgingpage;