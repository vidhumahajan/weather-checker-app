

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "35d9ea9c92bfa0bd8def6bf28b8d9d79";

/**
 * Fetch weather data by city name
 * @param {string} city
 * @returns {Promise<Object>}
 */
export const fetchWeatherByCity = async (city) => {
  const trimmedCity = city.trim();

  if (!trimmedCity) {
    throw new Error("City name cannot be empty.");
  }

  const url = `${BASE_URL}?q=${encodeURIComponent(
    trimmedCity
  )}&appid=${API_KEY}&units=metric`;

  let response;

  try {
    response = await fetch(url);
  } catch (error) {
    throw new Error("Network error. Please check your connection.");
  }

  if (response.status === 404) {
    throw new Error("City not found. Please try again.");
  }

  if (!response.ok) {
    throw new Error("Something went wrong. Please try again later.");
  }

  const data = await response.json();


  if (
    !data?.main?.temp ||
    !data?.weather?.[0]?.description ||
    !data?.weather?.[0]?.icon ||
    !data?.name
  ) {
    throw new Error("Invalid weather data received.");
  }

  return {
    city: data.name,
    temperature: data.main.temp,
    condition: data.weather[0].description,
    icon: data.weather[0].icon,
  };
};