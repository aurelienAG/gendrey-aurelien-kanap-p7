import React, { useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from 'react-router-dom';
import lodgingsdatas from "../../datas/lodgingsdatas";
import Collapse from "../../components/Collapse";
import Carrousel from "../../components/Carrousel";

function Lodgingpage() {
  const { id } = useParams();
  const lodgingdata = lodgingsdatas.find(lodging => lodging.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!lodgingdata) {
      navigate('/error');
    }
  }, [lodgingdata, navigate]);

  const carouselDatas = lodgingdata?.pictures || [];

  return (
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
        <div className="lodgingCollapseCards">
          <Collapse className="lodgingCollapse" title="Description" content={lodgingdata?.description} />
        </div>
        <div className="lodgingCollapseCards">
          <Collapse className="lodgingCollapse" title="Equipements" content={lodgingdata?.equipments} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Lodgingpage;
