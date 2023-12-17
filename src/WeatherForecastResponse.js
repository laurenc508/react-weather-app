import React, { useEffect, useState } from "react";
import WeatherForecast from "./WeatherForecast";
import "./index.css";
import "./Weather.css";

import axios from "axios";

export default function WeatherForecastResponse(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    const apiKey = "t10a312o9db3f83493ae6299a8330334";
    let lat = props.coordinates.latitude;
    let lon = props.coordinates.longitude;
    let city = props.data.city;
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?city=${city}&lon=${lon}&lat=${lat}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="column">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div key={index}>
                  <WeatherForecast data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
