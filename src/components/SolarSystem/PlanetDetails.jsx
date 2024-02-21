import React from 'react';
import { useParams } from 'react-router-dom';
import planetsData from '../../data/planets.json'; // Import planet data

const PlanetDetail = () => {
  const { planetName } = useParams(); // Get the planet name from the URL parameter
  const planet = planetsData.find((p) => p.name === planetName); // Find the planet data
  const url = `https://picsum.photos/200/300`

  if (!planet) {
    return <div>Planet not found</div>; // Handle case where planet is not found
  }

  return (
    <div className="planet-detail">
      <h2>{planet.name}</h2>
      <img src= {url} alt={planet.name} />
      <p>Detailed facts about {planet.name}...</p>
    </div>
  );
};

export default PlanetDetail;
