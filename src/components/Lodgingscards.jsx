import { useState, useEffect } from "react";
import axios from "axios";

function Lodgingscards(){
  
    const [lodgings, setLodgings] = useState([]);
   
    useEffect(() => {
      axios.get("../../public/lodgings.json")
        .then((res) => setLodgings(res.lodgings))
    }, [])
      return (
        <div>
          {lodgings.map(lodging => (
            <article>
            <img src={lodging.cover} alt={lodging.title}/>
            <h2>
              {lodging.title} 
            </h2>
            </article>
          ))}
        </div>
      );
    }

    export default Lodgingscards;