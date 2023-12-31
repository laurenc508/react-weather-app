import React, { useEffect, useState } from "react";
import WeatherForecast from "./WeatherForecast";
import "./index.css";
import "./Weather.css";

import axios from "axios";

export default function WeatherForecastResponse(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  function load() {
    let apiKey = "ee6baaf04ef0812e0b9985d92bacfccb";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="container">
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
    );
  } else {
    load();
    return "loading";
  }
}
