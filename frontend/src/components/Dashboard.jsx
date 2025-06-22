import WeatherCard from "./WeatherCard.jsx";
import LocationCard from "./LocationCard.jsx";
import ChatBotCard from "./ChatBotCard.jsx";

export default function Dashboard() {

    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 flex flex-col items-center justify-start pt-32">

            {/* 🔹 Üst Dekoratif  */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#a8e6cf] to-[#56ab2f] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>



            {/* Dashboard İçerik Kartları */}

            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-16 px-6 py-20 text-center">
                <WeatherCard />
                <LocationCard />
                <ChatBotCard />
            </div>



            {/* 🔹 Alt Dekoratif  */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#a8e6cf] to-[#56ab2f] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"

                />
            </div>
        </div>

    );
}
