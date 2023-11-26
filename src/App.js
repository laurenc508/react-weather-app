import React from "react";
import "./index.css";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Melbourne" />
        <div className="footer-text">
          <footer>
            <a
              className="footer-text"
              href="https://github.com/laurenc508/react-weather-app"
            >
              Open-sourced on Github
            </a>{" "}
            and coded by Lauren Cooper
          </footer>
        </div>
      </div>
    </div>
  );
}
