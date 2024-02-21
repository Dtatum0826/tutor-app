
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Planet = ({ planet, setShowTooltip, setSelectedPlanet }) => {
  const handleMouseEnter = () => {
    setShowTooltip(true);
    setSelectedPlanet(planet);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setSelectedPlanet(null);
  };

  return (
    <Link to={`/planet/${planet.name}`} className="planet-link"> {/* Use Link component with the planet name */}
      <div
        className="planet"
        style={{ backgroundColor: planet.color }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="planet-name">{planet.name}</div>
      </div>
    </Link>
  );
};

export default Planet;
