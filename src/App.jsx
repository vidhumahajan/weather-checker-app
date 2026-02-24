import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeatherByCity } from "./services/weatherService";

/**
 * Root Application Component
 */
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("C");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /**
   * Handles weather search
   */
  const handleSearch = useCallback(async (city) => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchWeatherByCity(city);
      setWeatherData(data);
      localStorage.setItem("lastCity", data.city);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Toggle temperature unit without refetching
   */
  const handleToggleUnit = useCallback(() => {
    setUnit((prev) => (prev === "C" ? "F" : "C"));
  }, []);

  /**
   * Auto-fetch last searched city on mount
   */
  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
      handleSearch(lastCity);
    }
  }, [handleSearch]);

  return (
    <main className="app-container">
      <h1>Simple Weather Checker</h1>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {error && <div className="error-box">{error}</div>}

      {weatherData && (
        <WeatherCard
          city={weatherData.city}
          temperature={weatherData.temperature}
          condition={weatherData.condition}
          icon={weatherData.icon}
          unit={unit}
          onToggleUnit={handleToggleUnit}
        />
      )}
    </main>
  );
};

export default App;