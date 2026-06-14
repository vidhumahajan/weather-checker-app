# Simple Weather Checker

A lightweight React application that lets you look up real-time weather conditions for any city in the world, with instant Celsius/Fahrenheit toggling and automatic recall of your last searched city.

---

## Features

- **City search** — fetch current weather for any city via the OpenWeatherMap API
- **Temperature unit toggle** — switch between °C and °F on the fly without re-fetching
- **Persistent last search** — on page load, automatically retrieves weather for the last city you searched (stored in `localStorage`)
- **Loading state** — spinner shown inside the search button during API calls
- **Error handling** — clear, user-friendly messages for empty input, city not found, and network errors

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Library | React 19 |
| Build Tool | Vite 7 |
| Linting | ESLint 9 with react-hooks and react-refresh plugins |
| Weather Data | [OpenWeatherMap API](https://openweathermap.org/api) (Current Weather endpoint) |

---

## Project Structure


weather-checker-app-main/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx      # Controlled input + submit form
│   │   └── WeatherCard.jsx    # Displays city, icon, temp, condition
│   ├── services/
│   │   └── weatherService.js  # OpenWeatherMap API integration
│   ├── styles/
│   │   └── App.css            # Component-scoped styles
│   ├── App.jsx                # Root component, state management
│   ├── index.css              # Global styles
│   └── main.jsx               # React entry point
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-checker-app.git
   cd weather-checker-app


2. Install dependencies:

   ```bash
   npm install
   ```

3. Add your OpenWeatherMap API key.

   Open `src/services/weatherService.js` and replace the value of `API_KEY` with your own key:

   ```js
   const API_KEY = "your_api_key_here";
   ```

   > You can get a free API key by signing up at [openweathermap.org](https://openweathermap.org/appid).

4. Start the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Build the app for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## How It Works

1. On mount, the app checks `localStorage` for a previously searched city and fetches its weather automatically.
2. The user types a city name into the search bar and submits.
3. `weatherService.js` calls the OpenWeatherMap Current Weather API with the city name and returns a normalized object containing the city name, temperature (in °C), weather condition description, and icon code.
4. The `WeatherCard` component renders the result. Temperature conversion between °C and °F is done client-side — no additional API call is made.
5. The searched city name is saved to `localStorage` so it persists across page refreshes.

---

## Environment & API Notes

- Weather data is fetched in metric units (`units=metric`) from the API; Fahrenheit conversion is calculated on the client.
- The free tier of the OpenWeatherMap API allows up to 60 calls per minute.
- The API key is currently hardcoded in `weatherService.js`. For any public or production deployment, move it to an environment variable:

  
  # .env
  VITE_WEATHER_API_KEY=your_api_key_here
  

  js
  // weatherService.js
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  ```

---

## License

This project is open source and available under the [MIT License](LICENSE).
