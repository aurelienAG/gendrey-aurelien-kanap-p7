import React, { useState, useEffect } from 'react';
import lodgingsdatas from "../datas/lodgingsdatas";
import { Link } from 'react-router-dom';

function LodgingsCards() {
  const [lodgings, setLodgings] = useState([]);

  useEffect(() => {
    setLodgings(lodgingsdatas);
  }, []);

  return (
 
      
        lodgings.map(lodging => (
          <figure className="lodgingscards" key={lodging.id}>
            <Link to={`/lodging/${lodging.id}`} class="lodgingsLink">
            <img src={lodging.cover} alt={lodging.title} />
            <h2>{lodging.title}</h2>
            </Link>
          </figure>
        ))
    
    
  );
}

export default LodgingsCards;
