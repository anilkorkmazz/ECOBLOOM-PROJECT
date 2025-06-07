import { useNavigate } from "react-router-dom";
import locationImage from "../assets/Picture1.png";

export default function LocationCard() {
    const navigate = useNavigate();

    return (
        <div
            className="relative flex flex-col items-center  rounded-2xl  p-8 hover:shadow-lg transition cursor-pointer text-center max-w-xs"
            onClick={() => navigate("/location-details")}
        >
            {/* Başlık */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Lokasyona Göre Öneri
            </h2>

            {/* Açıklama */}
            <p className="text-gray-600 text-sm mb-6">
                Şehrine en uygun bitkileri keşfetmek için tıkla.
            </p>

            {/* Görsel */}
            <div className="relative w-full flex justify-center">
                <img
                    src={locationImage}
                    alt="Location"
                    className="w-40 sm:w-48 lg:w-56 drop-shadow-xl transition-transform duration-300 hover:scale-105"
                />
            </div>
        </div>
    );
}
