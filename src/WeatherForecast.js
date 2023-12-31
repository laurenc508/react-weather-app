import React from "react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  <div className="WeatherForecast">
    <div className="row">
      <div className="col-md-2 card-border">
        <div className="card">
          <div className="weather-icon">
            <WeatherIcon code={props.data.icon} color="#adb5bd" size={52} />
          </div>
          <h5 className="card-title"> {day()}</h5>
          <p className="card-text">
            {minTemp()}°C
            <br />
            {maxTemp()}°C
          </p>
        </div>
      </div>
    </div>
  </div>;
}
