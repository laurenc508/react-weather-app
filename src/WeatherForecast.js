import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="card-group">
          <div className="card">
            <i className="fas fa-cloud cloud"></i>
            <div className="card-body">
              <h5 className="card-title">Tues</h5>
              <p className="card-text">
                9°C/
                <br />
                24°C
              </p>
            </div>
          </div>
          <div className="card">
            <i className="fas fa-sun sun"></i>
            <div className="card-body">
              <h5 className="card-title">Wed</h5>
              <p className="card-text">
                8°C/
                <br />
                16°C
              </p>
            </div>
          </div>
          <div className="card">
            <i className="fas fa-sun sun"></i>
            <div className="card-body">
              <h5 className="card-title">Thurs</h5>
              <p className="card-text">
                10°C/
                <br />
                23°C
              </p>
            </div>
          </div>
          <div className="card">
            <i className="fas fa-cloud-sun cloud-sun"></i>
            <div className="card-body">
              <h5 className="card-title">Fri</h5>
              <p className="card-text">
                9°C/
                <br />
                24°C
              </p>
            </div>
          </div>
          <div className="card">
            <i className="fas fa-cloud-showers-heavy rain"></i>
            <div className="card-body">
              <h5 className="card-title">Sat</h5>
              <p className="card-text">
                7°C/
                <br />
                20°C
              </p>
            </div>
          </div>
          <div className="card">
            <i className="fas fa-cloud-showers-heavy rain"></i>
            <div className="card-body">
              <h5 className="card-title">Sun</h5>
              <p className="card-text">
                9°C/
                <br />
                21°C
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
