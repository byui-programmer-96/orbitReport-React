import React, { useState } from 'react';
//import satData from './components/satData.jsx'

const Buttons = ({ filterByType, setSat, displaySats }) => {
  const handleFilterClick = (orbitType) => {
    filterByType(orbitType);
  };

  const handleResetClick = () => {
    setSat(null);
    displaySats();
  };

  return (
    <div className="button-container">
      <button onClick={() => handleFilterClick('LEO')}>Low Earth Orbit</button>
      <button onClick={() => handleFilterClick('MEO')}>Medium Earth Orbit</button>
      <button onClick={() => handleFilterClick('GEO')}>Geostationary Orbit</button>
      <button onClick={handleResetClick}>All Orbits</button>
    </div>
    
  );
};

export default Buttons;

