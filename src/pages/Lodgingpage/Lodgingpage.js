import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Error from "../Error/Error";
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import lodgingsdatas from "../../datas/lodgingsdatas";
import Collapse from "../../components/Collapse";
import Carrousel from "../../components/Carrousel";
import Star from "../../assets/images/star.svg";
import EmptyStar from "../../assets/images/emptyStar.svg";

function Lodgingpage() {
  const { id } = useParams();
  const lodgingdata = lodgingsdatas.find(lodging => lodging.id === id);
  const navigate = useNavigate();
 
  useEffect(() => {
    if (!lodgingdata) {
      // Redirection vers la page d'erreur si le logement n'existe pas
      navigate('/error');
    }
  }, [lodgingdata, navigate]);

  if (!lodgingdata) {
    // Affichage de la page d'erreur si le logement n'existe pas
    return <Error />;
  }

  const carouselDatas = lodgingdata.pictures;

  return (
    <div>
        <div className="lodgingPage">
          <Header />
          <Carrousel images={carouselDatas} />
          <section className="lodgingSelected">
            <div className="lodgingBloc">
                <div className="firstBloc">
                    <h1>{lodgingdata.title}</h1>
                  <p>{lodgingdata.location}</p> 
                <div className="tags">
                  {lodgingdata.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hostDatasBloc">
                  <div className='hostDatas'>
                    <p className="hostDatas--name">{lodgingdata.host.name}</p>
                    <img src={lodgingdata.host.picture} alt="hôte de l'appartement" />
                    </div>  
                    <span className='rating'>
                      {[...Array(parseInt(lodgingdata.rating))].map((_, index) => (
                        <img key={index} src={Star} alt={parseInt(lodgingdata.rating)}/>
                      ))}
                      {[...Array(5 - parseInt(lodgingdata.rating))].map((_, index) => (
                        <img key={index} src={EmptyStar} alt="étoiles vides" />
                      ))}
                    </span>
                    
                </div>
            </div>
          </section>
          <section className="lodgingCollapses">
            <div className="lodgingCollapseCard">
              <Collapse title="Description" content={lodgingdata.description} />
            </div>
            <div className="lodgingCollapseCard">
              <Collapse title="Equipements" content={
                <ul className="equipments">
                  {lodgingdata.equipments.map((equipment, index) => (
                    <li key={index}className="equipment">{equipment}</li>
                  ))}
                </ul>
              } />
            </div>
          </section>
        </div>
     
 <Footer />
    </div>
  );
}

export default Lodgingpage;
