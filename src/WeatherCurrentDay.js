import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnitConversion from "./WeatherUnitConversion";
import WeatherIcon from "./WeatherIcon";

import "bootstrap/dist/css/bootstrap.css";
import "./WeatherInfo.css";
import "./Weather.css";

export default function WeatherCurrentDay(props) {
  return (
    <div className="container">
      <div className="col-md-12 weather-details">
        <div className="row">
          <p className="h2">{props.data.city}</p>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
        <div className="col-md-12 weather-details">
          <div className="weather-icon">
            <WeatherIcon />
          </div>
          <div>
            <WeatherUnitConversion
              celsius={props.data.temperature}
              alt="temperature unit conversion"
            />
          </div>
        </div>
      </div>

      <div className="container weather-details">
        <div className="row">
          <div className="col-md-12">
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
      </div>
    </div>
  );
}
