import React from "react";
import SearchWeather from "./SearchWeather";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="app">
      <div className="container content">
        <SearchWeather defaultCity="Sydney" />
      </div>
    </div>
  );
}
