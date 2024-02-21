import  { useState, useEffect } from 'react';
import Planet from './Planet';
import planetsData from '../../data/planets.json';
import Tooltip from './Tooltip';
// import './SolarSystem.css'

const SolarSystem = () => {
  const [planets, setPlanets] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchApod = async () => {
       
      const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setImageUrl(data.url);
      } catch (error) {
        console.error("Error fetching APOD image:", error);
      }
    };

    fetchApod();
  }, []);

  
  useEffect(() => {
    setPlanets(planetsData); // Setting planets data directly
  }, []);

  return (
<div className="solar-system" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="sun"></div> 
      {planets.map((planet) => (
        <Planet
          key={planet.name}
          planet={planet}
          setShowTooltip={setShowTooltip}
          setSelectedPlanet={setSelectedPlanet}
        />
        
      ))}
      {showTooltip && selectedPlanet && (
        <Tooltip planet={selectedPlanet} onClose={() => setShowTooltip(false)} />
      )}
    </div>
  );
};

export default SolarSystem;