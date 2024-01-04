import React from "react";
import SearchWeather from "./SearchWeather";

import "./App.css";
import "./SearchWeather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="app">
      <div className="current-day-content">
        <SearchWeather defaultCity="Sydney" />
      </div>
    </div>
  );
}
