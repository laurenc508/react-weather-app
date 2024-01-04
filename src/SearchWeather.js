import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "./SearchWeather.css";

import WeatherCurrentDay from "./WeatherCurrentDay";
import WeatherForecastResponse from "./WeatherForecastResponse";

export default function SearchWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      coordinates: response.data.coordinates,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      icon: response.data.condition.icon,
      iconURL: response.data.condition.icon_url,
      description: response.data.condition.description,
    });
  }

  function Search() {
    const apiKey = "t10a312o9db3f83493ae6299a8330334";
    const units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-9 margin-top-medium">
              <input
                type="search"
                placeholder="Search for a city..."
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-md-3 margin-top-medium">
              <input
                type="submit"
                value="search"
                className="btn w-100"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
        <div>
          <div className="row">
            <WeatherCurrentDay data={weatherData} />
          </div>
          <div>
            <WeatherForecastResponse coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
