import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "bootstrap/dist/css/bootstrap.css";
import "./WeatherInfo.css";
import "./Weather.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "clear-sky-day",
    "01n": "clear-sky-night",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
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
        icon={codeMapping[props.code]}
        size={52}
        animate={true}
      />
    </div>
  );
}
