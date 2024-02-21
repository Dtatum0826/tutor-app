function Card({ children, reverse = true }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : 'white',
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  );
}

export default Card;