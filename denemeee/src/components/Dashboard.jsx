import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/background.png";
import WeatherCard from "./WeatherCard.jsx";
import LocationCard from "./LocationCard.jsx";
import ChatBotCard from "./ChatBotCard.jsx";

export default function Dashboard() {
    const [weather, setWeather] = useState(null);

    {/*
    useEffect(() => {
        setWeather({
            city: "İzmir",
            temperature: 28,
            condition: "Mostly Cloudy",
            high: 31,
            low: 21,
            hourly: [
                { time: "Now", temp: 28 },
                { time: "10", temp: 28 },
                { time: "11", temp: 29 },
                { time: "12", temp: 30 },
                { time: "13", temp: 31 },
                { time: "14", temp: 30 },
            ],
            daily: [
                { day: "Today", rainChance: 40, low: 21, high: 31 },
                { day: "Tuesday", rainChance: 40, low: 21, high: 31 },
                { day: "Wednesday", rainChance: 50, low: 21, high: 30 },
                { day: "Thursday", rainChance: 60, low: 22, high: 29 },
                { day: "Friday", rainChance: 70, low: 21, high: 29 },
            ],
        });
    }, []);

    */}

    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >


            {/* 3 Kartı Ortalamak için Grid */}
            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-16 px-6 py-20 text-center">
                <WeatherCard/>
                <LocationCard />
                <ChatBotCard />
            </div>
        </div>
    );
}
