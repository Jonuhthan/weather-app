"use client"

import React, { useState } from "react";

// type-check the prop
interface SearchBarProp {
    onLocationSubmit: (location: string) => void;
}

export default function SearchBar({onLocationSubmit}: SearchBarProp) {
    const [location, setLocation] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const location = event.target.value;
        setLocation(location);
    }

    const handleKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (location.trim() === "") {
            alert("Please enter a location!");
        }
        else {
            onLocationSubmit(location);
        }
    }
    
    return (
        <input
            type="search"
            autoComplete="off"
            autoFocus={true}
            placeholder="Enter a location:"
            onChange={handleChange}
            onKeyDown={handleKeyPressed}
            className="flex text-xl p-3 outline-solid rounded-xl"
        />
    )
}