import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  if (ready) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form" class="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Search for a city..."
                    className="form-control"
                    id="city-input"
                    autocomplete="off"
                    autofocus="on"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city"></h1>
              <ul>
                <li>
                  Last updated: <span id="date"></span>
                </li>
                <li id="description"></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img src="" alt="Clear" className="float-left" id="icon" />
                  <div class="float-left">
                    <strong id="temperature"></strong>
                    <span className="units">°C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity"></span>%
                  </li>
                  <li>
                    Wind: <span id="wind"></span>
                    <span className="wind-speed"> km/h</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
    );
  }
}
