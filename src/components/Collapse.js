import React, { useState} from 'react';
import arrow from "../assets/images/arrow.svg";

function Collapse({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <main className="collapsesBloc">
      <h1 onClick={toggleCollapse}>
        {title}
        <img
          src={arrow}
          alt="flêche"
          className={`arrow ${!isCollapsed ? 'arrowRotate' : 'reverse'}`}
        />
      </h1>
      {isCollapsed ? null : (
        <div className="collapsesContent">
          <p className="collapsesText">{content}</p>
        </div>
      )}
    </main>
  );
}


export default Collapse;