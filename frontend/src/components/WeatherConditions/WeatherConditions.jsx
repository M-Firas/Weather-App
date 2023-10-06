import "./WeatherConditions.css";

export const WeatherConditions = ({data}) => {
  return (
    <div className="weatherConditions">
      <div className="weatherConditions--container">
        <div className="item">
          <div className="title">
            <img src="icons/minTemp.svg" alt="" />
            <h4>Min-Temp</h4>
          </div>

          <p>{Math.round(data.main.temp_min)}°C</p>
        </div>
        <div className="item">
          <div className="title">
            <img src="icons/maxTemp.svg" alt="" />
            <h4>Max-Temp</h4>
          </div>
          <p>{Math.round(data.main.temp_max)}°C</p>
        </div>
        <div className="item">
          <div className="title">
            <img src="icons/feelsLike.svg" alt="" />
            <h4>Feels Like</h4>
          </div>
          <p>{Math.round(data.main.feels_like)}°C</p>
        </div>
        <div className="item">
          <div className="title">
            <img src="icons/wind.svg" alt="" />
            <h4>Wind</h4>
          </div>
          <p>{Math.round(data.wind.speed)} km/h</p>
        </div>
        <div className="item">
          <div className="title">
            <img src="icons/humidity.svg" alt="" />
            <h4>Humidity</h4>
          </div>
          <p>{data.main.humidity}%</p>
        </div>
        <div className="item">
          <div className="title">
            <img src="icons/pressure.svg" alt="" />
            <h4>Pressure</h4>
          </div>
          <p>{data.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};
