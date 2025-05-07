"use client"

interface WeatherData {
    location: {
        name: string;
        country: string;
    };
    current: {
        temp_f: number;
        temp_c: number;
        feelslike_f: number;
        feelslike_c: number;
        condition: {
            text: string;
            icon: string;
        };
        last_updated: string;
    };
}

export default function Results({data}: {data: WeatherData}) {
    const imgSrc = `https:${data.current.condition.icon}`;
    
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <div className="text-center text-lg font-semibold">{data.location.name}, {data.location.country}</div>

            <div className="flex flex-row items-center justify-center mt-4">
                <img src={imgSrc} alt="Weather Icon" className="w-16 h-16" />
                <div className="ml-4 text-xl font-medium">{data.current.condition.text}</div>
            </div>

            <div className="text-center text-lg mt-4">
                🌡️ {data.current.temp_f}°F / {data.current.temp_c}°C
            </div>

            <div className="text-center mt-4">
                Feels Like: {data.current.feelslike_f}°F / {data.current.feelslike_c}°C
            </div>

            <div className="text-center text-sm text-gray-500 mt-2">
                Last Updated: {data.current.last_updated}
            </div>
        </div>
    );
}