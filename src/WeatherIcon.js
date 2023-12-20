import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./WeatherInfo.css";
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
    <div class="WeatherIcon">
      {/*see if need to map to different thing as not using the react icons */}
      <img
        src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
        icon={codeMapping[props.condition]}
        size={props.size}
      />
    </div>
  );
}
