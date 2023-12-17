import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "Clear sky",
    "clear-sky-night": "Clear sky",
    "few-clouds-day": "Few clouds",
    "few-clouds-night": "Few clouds",
    "scattered-clouds-day": "Scattered clouds",
    "scattered-clouds-night": "Scattered clouds",
    "broken-clouds-day": "Broken clouds",
    "broken-clouds-night": "Broken clouds",
    "shower-rain-day": "Shower rains",
    "shower-rain-night": "Shower rain",
    "rain-day": "Rain",
    "rain-night": "Rain",
    "thunderstorm-day": "Thunderstorm",
    "thunderstorm-night": "Thunderstorm",
    "snow-day": "Snow",
    "snow-night": "Snow",
    "mist-day": "Mist",
    "mist-night": "Mist",
  };

  return (
    <div>
      {/*see if need to map to different thing as not using the react icons */}
      <ReactAnimatedWeather
        icon={codeMapping[props.condition]}
        size={props.size}
      />
    </div>
  );
}
