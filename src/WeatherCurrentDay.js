import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnitConversion from "./WeatherUnitConversion";
import WeatherIcon from "./WeatherIcon";

import "bootstrap/dist/css/bootstrap.css";
import "./SearchWeather.css";

export default function WeatherCurrentDay(props) {
  return (
    <div className="current-day-content">
      <div className="row">
        <div className="col-md-12 weather-details">
          <p className="h2 margin-top-medium">{props.data.city}</p>
          <ul>
            <li>
              <span>Last updated:</span>
              <span>
                <FormattedDate date={props.data.date} />
              </span>
            </li>
            <br />
            <li>{props.data.description}</li>
          </ul>
        </div>

        <div className="col-md-12 weather-details">
          <div className="weather-icon">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div>
            <WeatherUnitConversion
              celsius={props.data.temperature}
              alt="temperature unit conversion"
            />
          </div>
        </div>
      </div>

      <div className="weather-details">
        <div className="row">
          <div className="col-md-12">
            <ul>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}
