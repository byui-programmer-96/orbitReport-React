import React, { useState } from "react";
import satData from "./components/satData";
import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
    const filteredSats = satData.filter((satellite) => satellite.orbitType === currentType);
    setSat(filteredSats);
  };

  return (
    <div>
      <Banner />
      <Buttons filterByType={filterByType} setSat={setSat} displaySats={displaySats} />
      <Table sat={sat} />
    </div>
  );
}

export default App;
