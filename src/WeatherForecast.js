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
          <h5 class="days"> {day()}</h5>

          <div>
            <WeatherIcon
              code={props.data.condition.icon}
              color="#adb5bd"
              size={52}
            />
            <span class="min-max-temp card-text">min:</span> {minTemp()}C
            <br />
            <div class="line-break">
              {" "}
              <hr />
            </div>
            <span class="min-max-temp">max:</span> {maxTemp()}C
          </div>
        </div>
      </div>
    </div>
  );
}
