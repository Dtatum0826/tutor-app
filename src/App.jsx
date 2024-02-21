
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import WordDefinition from "./components/WordDefinition";
import Problems from "./components/Problems";
import Header from "./components/header/Header";
import HomePage from "./components/Homepage";
import Quiz from "./components/Quiz";
import SolarSystem from "./components/SolarSystem/SolarSystem";
import PlanetDetail from "./components/SolarSystem/PlanetDetails";



function App() {
  const [minNum, setMinNum] = useState(1);
  const [maxNum, setMaxNum] = useState(10);
  
  
  const handleNumChange = (name, value) => {
    if (name === 'minNum') {
      setMinNum(parseInt(value));
    } else {
      setMaxNum(parseInt(value));
    }
  };

 


  return (
    <BrowserRouter>
    <div>
      
      <Header/>
       <Routes>
       <Route path="/" element={<HomePage />} />
        <Route path="/problems" element={<Problems minNum={minNum} maxNum={maxNum} onNumChange={handleNumChange} />} />
        <Route path="/word-definition" element={<WordDefinition />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/planets" element={<SolarSystem />} />
        <Route path="/planet/:planetName" element={<PlanetDetail/>} />
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;