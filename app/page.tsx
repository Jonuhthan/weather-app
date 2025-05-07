"use client"

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";

export default function Home() {
  const [location, setLocation] = useState("");

  const handleLocationChange = (location: string) => {
    setLocation(location);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-white text-black font-serif">
      <div className="flex flex-col h-screen items-center justify-center">
        <SearchBar onLocationSubmit={handleLocationChange}/>
        <Results />
        <div>{location}</div>
      </div>
    </div>
  );
}