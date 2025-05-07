"use client"

import React, { useState } from "react";

// type-check the prop
interface SearchBarProp {
    onCitySubmit: (city: string) => void;
}

export default function SearchBar({onCitySubmit}: SearchBarProp) {
    const [city, setCity] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const city = event.target.value;
        setCity(city);
    }

    const handleKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (city.trim() === "") {
            alert("Please enter a city!");
        }
        else {
            onCitySubmit(city);
        }
    }
    
    return (
        <input
            type="search"
            autoComplete="off"
            autoFocus={true}
            placeholder="Enter a city:"
            onChange={handleChange}
            onKeyDown={handleKeyPressed}
            className="flex text-xl p-3 outline-solid rounded-xl"
        />
    )
}