import aboutdatas from "../datas/aboutdatas.json"
import React, { useState, useEffect } from 'react';
import arrow from "../assets/images/arrow.svg";
const Collapse = () => {
  const [collapseStates, setCollapseStates] = useState([]);

  const toggleCollapse = (index) => {
    setCollapseStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(aboutdatas);
    setCollapseStates(new Array(aboutdatas.length).fill(false));
  }, []);

  return (
    <main className="collapsesBloc">
      {datas.map((data, index) => (
        <div className="collapseCards" key={index}>
          <h1 onClick={() => toggleCollapse(index)}>{data.title} <img src={arrow} alt="flêche" className={`arrow ${collapseStates[index] ? 'arrowRotate' : 'reverse'}`} /></h1>
          {collapseStates[index] && <div className="collapsesText">{data.text}</div>}
        </div>
      ))}
    </main>
  );
};

export default Collapse;
