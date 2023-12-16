import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-md-2 card-border">
          <div className="card">
            <WeatherIcon
              code={props.data.weather[0].icon}
              color="#adb5bd"
              size={52}
            />
            <h5 className="card-title"> {day()}</h5>
            <p className="card-text">
              {minTemp()}°C
              <br />
              {maxTemp()}°C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
