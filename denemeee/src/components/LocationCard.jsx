import { useNavigate } from "react-router-dom";
import locationImage from "../assets/Picture1.png";

export default function LocationCard() {
    const navigate = useNavigate();

    return (
        <div className="relative flex flex-col items-center text-white cursor-pointer" onClick={() => navigate("/location-details")}>
            {/* Başlık */}
            <h2 className="text-2xl font-semibold mb-6 hover:underline">Lokasyona Göre Öneri</h2>

            {/* ChatBot Görseli ve Çerçeve */}
            <div className="relative flex items-center justify-center w-96 h-96">
                {/* Lokasyon Görseli */}
                <img
                    src={locationImage}
                    alt="Location"
                    className="w-48 sm:w-64 lg:w-72 max-w-full drop-shadow-lg transition-transform duration-300 hover:scale-105"
                />
            </div>
        </div>
    );
}
