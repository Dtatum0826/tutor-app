

const Tooltip = ({ planet, onClose }) => {
  return (
    <div className="tooltip">
      <div className="tooltip-content">
        <h3>{planet.name}</h3>
        <p>Size: {planet.size}</p>
        <p>Distance from Sun: {planet.distance} AU</p>
        <p>Facts:</p>
        <ul>
          {planet.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Tooltip;
