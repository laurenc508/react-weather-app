import React, { useState, useEffect } from "react";
import WeatherForecast from "./WeatherForecast";
import "./index.css";
import "./Weather.css";

import axios from "axios";

export default function WeatherForecastResponse(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.inputCity]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 7) {
            return (
              <div className="col" key={index}>
                <WeatherForecast data={dailyForecast} />
              </div>
            );
          } else {
            return `data`;
          }
        })}
      </div>
    );
  } else {
    const apiKey = "t10a312o9db3f83493ae6299a8330334";

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.longitude}&lat=${props.coordinates.latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
