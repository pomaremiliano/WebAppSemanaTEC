"use client";
import { useState } from "react";
import axios from "axios";
import { Weather } from "../types/index";

export default function FetchWeather() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<Weather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error fetching data");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const onClick = () => {
    if (city) {
      fetchWeather(city);
    } else {
      setError("City is required");
    }
  };

  return (
    <div className="pokemon-card ml-10 mb-10 mr-10">
      <h3 className="text-slate-800">Clima de hoy</h3>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleInputChange}
        className="border p-2 mr-2 text-slate-400"
      />
      <button
        onClick={onClick}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Buscar
      </button>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-gray-500">{error}</p>}

      {weather && (
        <div className="mt-4 ml-10">
          <h4>{weather.name}</h4>
          <p className="text-blue-900 text-base">Temperature: {weather.main.temp}°C</p>
          <p className="text-blue-900 text-base">Humidity: {weather.main.humidity}%</p>
          <p className="text-blue-900 text-base">
            Description: {weather.weather[0].description}
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
        </div>
      )}
    </div>
  );
}
