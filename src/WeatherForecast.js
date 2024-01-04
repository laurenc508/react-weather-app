import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "./SearchWeather.css";
import "./WeatherForecast.css";

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
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecast">
      <h5 className="days"> {day()}</h5>

      <div className="row weather-icon">
        <div className="container">
          <WeatherIcon
            code={props.data.condition.icon}
            color="#adb5bd"
            size={52}
          />
        </div>
      </div>

      <div className="row">
        <div className="container">
          <span className="min-max-temp">min: </span>{" "}
          <span className="temp-value"> {minTemp()}C</span>
        </div>
      </div>

      <div className="row">
        <div className="container">
          <span className="min-max-temp">max: </span>{" "}
          <span className="temp-value">{maxTemp()}C</span>
        </div>
      </div>
    </div>
  );
}
