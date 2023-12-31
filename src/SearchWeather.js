import React, { useState } from "react";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";

import WeatherCurrentDay from "./WeatherCurrentDay";
import WeatherForecastResponse from "./WeatherForecastResponse";

export default function SearchWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      coord: response.data.coordinates,
    });
  }

  function Search() {
    const apiKey = "ee6baaf04ef0812e0b9985d92bacfccb";
    const units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
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
            <div className="col-md-9 wrapper-margin-top">
              <input
                type="search"
                placeholder="Search for a city..."
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-md-3 wrapper-margin-top">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
        <div>
          <div className="row">
            <WeatherCurrentDay data={weatherData} />
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
