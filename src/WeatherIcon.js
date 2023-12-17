import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function WeatherIcon(props) {
  console.log(props.condition);
  const codeMapping = {
    "clear-sky-day": "Clear sky",
    "clear-sky-night": "Clear sky",
    "few-clouds-day": "Few clouds",
    "few-clouds-night": "Few clouds",
    "03d": "scattered-clouds-day",
    "03n": "scattered-clouds-night",
    "04d": "broken-clouds-day",
    "04n": "broken-clouds-night",
    "09d": "shower-rain-day",
    "09n": "RAIN",
    "010d": "RAIN",
    "010n": "RAIN",
    "011d": "RAIN",
    "011n": "RAIN",
    "013d": "SNOW",
    "013n": "SNOW",
    "050d": "FOG",
    "050n": "FOG",
  };

  return (
    <div>
      <ReactAnimatedWeather
        icon={codeMapping[props.condition]}
        size={props.size}
      />
    </div>
  );
}
