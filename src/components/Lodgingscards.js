import lodgingsdatas from "../datas/lodgingsdatas";
import { Link } from 'react-router-dom';

function LodgingsCards() {
  return (      
        lodgingsdatas.map(lodging => (
          <figure className="lodgingscards" key={lodging.id}>
            <Link to={`/lodging/${lodging.id}`} className="lodgingsLink">
            <img src={lodging.cover} alt={lodging.title} />
            <h2>{lodging.title}</h2>
            </Link>
          </figure>
        ))
    
    
  );
}

export default LodgingsCards;
