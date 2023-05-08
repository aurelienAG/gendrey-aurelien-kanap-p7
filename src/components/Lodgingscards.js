import React, { useState, useEffect } from 'react';
import lodgingsdatas from "../datas/lodgingsdatas";

function LodgingsCards() {
  const [lodgings, setLodgings] = useState([]);

  useEffect(() => {
    setLodgings(lodgingsdatas);
  }, []);

  return (
 
      <article className="cards">
        {lodgings.map(lodging => (
          <div key={lodging.id}>
            <img src={lodging.cover} alt={lodging.title} />
            <h2>{lodging.title}</h2>
          </div>
        ))}
      </article>
    
  );
}

export default LodgingsCards;
