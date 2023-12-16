import React, { useEffect, useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./index.css";
import "./Weather.css";

import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        {forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let apiKey = "11ac77d4c412e530dd8cf272c4c04c34";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
