function InputRange({ label, id, value, min, max, handleChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="number"
        id={id}
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputRange;