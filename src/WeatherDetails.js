import React from "react";
import "./index.css";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function WeatherDetails(props) {
  return (
    <div>
      <div className="row">
        <h2>{props.data.city}</h2>
        <ul>
          <li>
            Last updated: <FormattedDate data={props.data.date} />
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
    </div>
  );
}
