import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "./SearchWeather.css";

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
      <div className="row">
        <div className="col-md-2">
          <div>
            <WeatherIcon
              code={props.data.condition.icon}
              color="#adb5bd"
              size={52}
            />
            <h5> {day()}</h5>
            <p>
              min: {minTemp()}C
              <br />
              max: {maxTemp()}C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
