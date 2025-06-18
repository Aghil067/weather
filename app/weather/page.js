"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchWeather = async (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error("City not found");
      } else {
        throw new Error("Failed to fetch weather data");
      }
    }
  };

  const getWeather = async () => {
    if (!city.trim()) {
      setErrorMsg("Please enter a city name.");
      setWeather(null);
      return;
    }

    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setErrorMsg("");
    } catch (error) {
      setWeather(null);
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg?semt=ais_hybrid&w=740')] bg-cover bg-center flex flex-col min-h-[85vh] justify-center items-center">
      <div className="backdrop-blur-md h-auto bg-white/10 border border-white/20 rounded-xl shadow-md p-6 text-white w-150 max-w-md">
        <div className="flex items-center gap-3 w-full">
          <label className="text-white text-xl font-medium whitespace-nowrap min-w-[90px]">Enter City</label>
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="e.g. Chennai"
            className="flex-1 px-4 py-2 rounded-md border border-sky-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <button
          onClick={getWeather}
          className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-md mt-4 w-full text-white font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Get Weather
        </button>

        {errorMsg && <p className="mt-3 text-red-400 font-medium">{errorMsg}</p>}

        {weather && (
          <div className="mt-4 space-y-1">
            <h2 className="text-2xl font-bold">{weather.name}</h2>
            <p className="text-lg">Temperature: {weather.main.temp} °C</p>
            <p className="text-lg">Weather: {weather.weather[0].description}</p>
            <p className="text-lg">Humidity: {weather.main.humidity}%</p>
            <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
