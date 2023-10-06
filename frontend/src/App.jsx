import "./App.css";
//components
import { SearchBar } from "./components/Search/SearchBar";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { WeatherConditions } from "./components/WeatherConditions/WeatherConditions";
import { WeatherForecast } from "./components/WeatherForecast/WeatherForecast";
import DarkMode from "./components/DarkMode/DarkMode";
//API
import { WEATHER_API_URL, WEATHER_API_KEY } from "./weatherApi";
//hooks
import { useState } from "react";
import { Alert } from "./components/Alert/Alert";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(forecast);

  return (
    <div className="App">
      <div className="search-darkMode-container">
        <div className="search--container">
          <SearchBar onSearchChange={handleOnSearchChange} />
        </div>
        <DarkMode />
      </div>

      <div className="weather--info">
        <div className="left">
          {currentWeather ? (
            <>
              <CurrentWeather data={currentWeather} />
              <WeatherConditions data={currentWeather} />
            </>
          ) : (
            <Alert />
          )}
        </div>

        <div className="right">
          { forecast && <WeatherForecast data={forecast} />}
        </div>
      </div>
    </div>
  );
}

export default App;
