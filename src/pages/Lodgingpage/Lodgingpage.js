import React, { useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from 'react-router-dom';
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
      navigate('/error');
    }
  }, [lodgingdata, navigate]);
 
 const ratingNumber = parseInt(lodgingdata.rating); 
 const emptyStarQty = 5 - ratingNumber; 
 console.log(ratingNumber);
 console.log(emptyStarQty);
  
const carouselDatas = lodgingdata.pictures || [];

  return (
    <div>
    <div className="lodgingPage">
      <Header />
      <Carrousel images={carouselDatas} />
      {lodgingdata && (
        <section className="lodgingSelected">
          <div className="lodgingBloc">
            <div>
              <div className="firstBloc">
                <div>
                  <h1>{lodgingdata.title}</h1>
                </div>
                <div className='hostDatas'>
                  <p>{lodgingdata.host.name}</p>
                  <img src={lodgingdata.host.picture} alt="hôte de l'appartement" />
                  <span className='rating'>
                  {[...Array(ratingNumber)].map((_, index) => (
        <img key={index} src={Star} alt="note" />
      ))} {[...Array(emptyStarQty)].map((_, index) => (
        <img key={index} src={EmptyStar} alt="étoiles vides" />
      ))}
                  </span>
                </div>
              </div>
              <aside>
                <p>{lodgingdata.location}</p>
              </aside>
              <div className="tags">
                {lodgingdata.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </section>
      )}
      <section className="lodgingCollapses">
        <div className="lodgingCollapseCard">
          <Collapse title="Description" content={lodgingdata.description}/>
        </div>  
        <div className="lodgingCollapseCard">
          <Collapse title="Equipements" content={
   <ul>
      {lodgingdata.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  }
      />
      </div>
      </section>
      </div>
      <Footer />
   </div>
  );
}

export default Lodgingpage;
