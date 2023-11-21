import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      iconUrl: `https://api.openweathermap.org/data/3.0/onecall?q=${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function Search() {
    const apiKey = "11ac77d4c412e530dd8cf272c4c04c34";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?q=${city}&appid=${apiKey}&units=${units}`;
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
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form class="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Search for a city..."
                    className="form-control"
                    autocomplete="off"
                    autofocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
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
                <h2>{props.data.city}</h2>
                <ul>
                  <li>
                    <FormattedDate date={weatherData.date} />
                  </li>
                  <li>{props.data.description}</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex weather-temperature">
                    <img
                      src={props.data.iconUrl}
                      alt={props.data.description}
                      className="float-left"
                    />
                    <div class="float-left">
                      <strong>{Math.round(props.data.temperature)}</strong>
                      <span className="units">°C</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Humidity: <span>{props.data.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span>{props.data.wind}</span>
                      <span className="wind-speed"> km/h</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="weather-forecast" id="forecast"></div>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  } else Search();
  return "Loading...";
}
