import React from "react";

/**
 * WeatherCard Component
 * Displays weather information
 */
const WeatherCard = ({
  city,
  temperature,
  condition,
  icon,
  unit,
  onToggleUnit,
}) => {
  const displayTemperature =
    unit === "C"
      ? temperature.toFixed(1)
      : ((temperature * 9) / 5 + 32).toFixed(1);

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <section className="weather-card">
      <h2>{city}</h2>

      <img src={iconUrl} alt={condition} />

      <p className="temperature">
        {displayTemperature}°{unit}
      </p>

      <p className="condition">{condition}</p>

      <button className="toggle-btn" onClick={onToggleUnit}>
        Switch to °{unit === "C" ? "F" : "C"}
      </button>
    </section>
  );
};

export default React.memo(WeatherCard);