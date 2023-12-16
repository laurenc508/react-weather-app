import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnitConversion from "./WeatherUnitConversion";

import "bootstrap/dist/css/bootstrap.css";
import "./WeatherInfo.css";
import "./Weather.css";

export default function WeatherCurrentDay(props) {
  return (
    <div className="container">
      <div className="col-md-12 weather-details">
        <div className="row">
          {/*assumes this is more like a micro app that is embedded within another page, therefore there are no heading tags for seo as they would be on the page */}
          <p class="h2">{props.data.city}</p>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
        <div className="col-md-12 weather-details">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={40}
          />
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
