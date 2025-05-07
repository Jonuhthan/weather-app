"use client"

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";

export default function Home() {
  const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  
  async function getData(city: string) {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);
      if (response.status === 400) {
        alert("Please enter a valid city!");
      }
      else if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      else {
        const responseData = await response.json();
        setWeatherData(responseData);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }  
  }

  const handleCitySubmit = (city: string) => {
    getData(city);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-white text-black font-serif">
      <div className="flex flex-col h-screen items-center justify-center gap-5">
        <SearchBar onCitySubmit={handleCitySubmit}/>
        {weatherData && <Results data={weatherData}/>}
      </div>
    </div>
  );
}