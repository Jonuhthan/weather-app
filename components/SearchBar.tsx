"use client"

import React, { useState } from "react"

export default function SearchBar() {
    const [location, setLocation] = useState("");

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
            // replace with passing location up to page to make api call
            console.log(location);
        }
    }
    
    return (
        <input
            type="search"
            autoComplete="off"
            autoFocus={true}
            placeholder="Enter a location:"
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={handleKeyPressed}
            className="flex text-xl p-3 outline-solid rounded-xl"
        />
    )
}