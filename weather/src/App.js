import React, { useState } from "react";
import "./App.css";
function App() {
  const [location, setLocation] = useState("");
  const [info, setInfo] = useState([{}]);
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1a1aa2d3af86b3ecdb2d90c011305198`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setInfo(data));
      setLocation("");
    }
  };

  // https://api.openweathermap.org/data/2.5/weather?q=london&appid=1a1aa2d3af86b3ecdb2d90c011305198

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{info.name}</p>
          </div>
          <div className="temp">{info.main.temp}<span>°F</span></div>
          <div className="description">
            <p>{info.weather[0].main}</p>
          </div>
        </div>

        <div className="buttom">
          <div className="feels">
            <p className="bold">{info.main.feels_like}<span>°F</span></p>
            <p>feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">{info.main.humidity}<span>%</span></p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">{info.wind.speed} <span>MPH</span></p>
            <p>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
