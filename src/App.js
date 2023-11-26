import React from "react";
import Weather from "./Weather";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Weather defaultCity="Melbourne" />
      </div>
    </div>
  );
}
