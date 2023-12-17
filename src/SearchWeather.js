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
      temperature: response.data.daily.temperature,
      coordinates: response.data.coordinates,
      humidity: response.data.daily.temperature.humidity,
      wind: response.data.daily.wind.speed,

      /*may need to update, as the JSON file may be 10000 out */
      date: new Date(response.data.daily.time * 1000),
      city: response.data.city,
      icon: response.data.daily.condition.icon,
      iconURL: response.data.daily.condition.icon_url,
      description: response.data.daily.condition.description,
    });
  }

  function Search() {
    const apiKey = "11ac77d4c412e530dd8cf272c4c04c34";
    const units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?city=${city}&appid=${apiKey}&units=${units}`;
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
                autocomplete="off"
                autofocus="on"
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
