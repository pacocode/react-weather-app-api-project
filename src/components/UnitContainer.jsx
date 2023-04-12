const UnitContainer = ({ handledClick, unit }) => {
  return (
    <div className="unit-container">
      <button
        className={unit === "celcius" ? null : "greyed"}
        id="celcius"
        onClick={handledClick}>
        °C
      </button>
      <button
        className={unit === "fahrenheit" ? null : "greyed"}
        id="fahrenheit"
        onClick={handledClick}>
        °F
      </button>
      <button
        className={unit === "kelvin" ? null : "greyed"}
        id="kelvin"
        onClick={handledClick}>
        °K
      </button>
    </div>
  );
};
export default UnitContainer;
