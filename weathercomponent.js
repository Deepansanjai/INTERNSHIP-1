import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const getWeather = async () => {
    if (!city) return;

    const res = await fetch(`https://wttr.in/${city}?format=j1`);
    const result = await res.json();

    setData({
      temp: result.current_condition[0].temp_C,
      desc: result.current_condition[0].weatherDesc[0].value
    });
  };

  return (
    <div>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {data && (
        <p>
          Temp: {data.temp}°C | Condition: {data.desc}
        </p>
      )}
    </div>
  );
}

export default Weather;