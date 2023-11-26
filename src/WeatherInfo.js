import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

import "bootstrap/dist/css/bootstrap.css";
import "./WeatherInfo.css";



export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <h2>{props.data.city}</h2>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex weather-temperature float-left">
            <WeatherIcon code={props.data.icon} />
            <div class="float-left">
              <WeatherTemp celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
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
  );
}
