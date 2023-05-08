import React, { useState, useEffect } from 'react';
import lodgingsdatas from "../datas/lodgingsdatas";

function LodgingsCards() {
  const [lodgings, setLodgings] = useState([]);

  useEffect(() => {
    setLodgings(lodgingsdatas);
  }, []);

  return (
 
      
        lodgings.map(lodging => (
          <figure className="lodgingscards" key={lodging.id}>
            <img src={lodging.cover} alt={lodging.title} />
            <h2>{lodging.title}</h2>
          </figure>
        ))
    
    
  );
}

export default LodgingsCards;
