import React from "react";
import "./index.css";
import "./Weather.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Melbourne" />
        <footer>
          This project was coded by Lauren Cooper, and is
          <a href="https://github.com/laurenc508/react-weather-app">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
