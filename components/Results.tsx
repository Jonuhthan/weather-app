"use client"

interface WeatherData {
    location: {
        name: string;
        country: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string;
        };
    };
}

export default function Results({data}: {data: WeatherData}) {
    const country = data.location.country;
    return (
        <div>Your city is in this country: {country}</div>
    )
}