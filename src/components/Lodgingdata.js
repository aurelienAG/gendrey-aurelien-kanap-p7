import { useParams } from 'react-router-dom';
import lodgingsdatas from "../datas/lodgingsdatas";

function Lodgingdata(){
    const { id } = useParams();
    const lodgingdata = lodgingsdatas.find(lodging => lodging.id === id);
  
    return (
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
    );
} 

export default Lodgingdata;
