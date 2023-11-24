import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

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
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function Search() {
    const apiKey = "11ac77d4c412e530dd8cf272c4c04c34";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
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
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
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
              <WeatherInfo data={weatherData} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
