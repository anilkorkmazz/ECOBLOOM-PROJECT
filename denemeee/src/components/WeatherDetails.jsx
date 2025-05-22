import { useState } from "react";
import backgroundImage from "../assets/Weather.png";
import axios from "axios";
import { FaSearch, FaArrowLeft } from "react-icons/fa";




// 📌 TEST AMAÇLI ÖRNEK BİTKİ VERİLERİ (Sıcaklık → Bitkiler)
const testPlantData = {
    "15-20": [
        { name: "Fern 🌿", growTime: "6-8 ay", tempRange: "15° - 20°" },
        { name: "Moss 🌱", growTime: "3-5 ay", tempRange: "14° - 18°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" },
        { name: "Orchid 🌸", growTime: "9-12 ay", tempRange: "16° - 21°" }

    ],
    "10-15": [
        { name: "Cactus 🌵", growTime: "12-18 ay", tempRange: "10° - 15°" },
        { name: "Succulent 🌵", growTime: "8-10 ay", tempRange: "10° - 14°" },
        { name: "Aloe Vera 🍃", growTime: "6-9 ay", tempRange: "12° - 16°" }
    ],
    "20-25": [
        { name: "Bamboo 🎍", growTime: "12-24 ay", tempRange: "20° - 25°" },
        { name: "Banana Plant 🍌", growTime: "10-12 ay", tempRange: "22° - 27°" },
        { name: "Fiddle Leaf Fig 🌳", growTime: "18-24 ay", tempRange: "20° - 25°" }
    ]
};

export default function WeatherDetails() {
    //const [humidity, setHumidity] = useState("");
    const [temp, setTemp] = useState("");
    const [plantNames, setPlantNames] = useState([]);
    const [error, setError] = useState("");

    {/*
    const handleSearch = async () => {
        setError("");

        // 📌 Kullanıcının girdiği sıcaklık ve nem değerini belirli bir formata çeviriyoruz
        const key = `${temp}`;

        // 📌 TEST AMAÇLI VERİLERİ KULLANIYORUZ
        const plants = testPlantData[key] || [];
        setPlantNames(plants);

        if (plants.length === 0) {
            setError("⚠️ Uygun bitki bulunamadı.");
        }

    };

    */}






   // ######################### bu gerçek API Verimiz ###################################################################

    const handleSearch = async () => {
        setError("");


        if (!temp.trim()) {
            setError("⚠️ Lütfen sıcaklık aralığını giriniz. Örn: 15°-20°");
            setPlantNames([]);
            return;
        }


        const parts = temp.split("-").map((t) => parseFloat(t.trim()));
        const minTemp = parts[0];
        const maxTemp = parts[1];

        if (parts.length !== 2 || isNaN(minTemp) || isNaN(maxTemp)) {
            setError("⚠️ Geçerli bir sıcaklık aralığı giriniz. Örn: 15°-20°");
            setPlantNames([]);
            return;
        }


        if (minTemp > maxTemp) {
            setError("⚠️ Alt sıcaklık, üst sıcaklıktan büyük olamaz.");
            setPlantNames([]);
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8081/bitki-isimleri/get-bitki-isimleri-list-by-sicaklik",
                {
                    altSicaklik: minTemp,
                    ustSicaklik: maxTemp,
                }
            );
            if (response.data.length === 0) {
                setError("⚠️ Uygun bitki bulunamadı.");
            }
            setPlantNames(response.data || []);
        } catch (error) {
            console.error("Error fetching plant data:", error);
            setPlantNames([]);
            setError("No plant data available!");
        }
    };

    // ######################### bu gerçek API Verimiz ###################################################################





    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >

            {/* 🔙 Geri Butonu */}
            <button
                onClick={() => window.history.back()}
                className="absolute top-6 left-6 flex items-center gap-2 bg-white bg-opacity-80 px-4 py-2 rounded-full shadow hover:bg-opacity-100 transition"
            >
                <FaArrowLeft className="text-green-700" size={20} />
                <span className="text-green-700 font-semibold">Geri</span>
            </button>


            {/* Sayfa Başlığı */}
            <h1 className="text-4xl font-semibold text-white mb-8">Sıcaklığa Göre Öneri</h1>

            {/* Arama ve Parametre Girişi */}
            <div className="relative flex flex-col items-center gap-4">

                <div className="flex items-center bg-white bg-opacity-90 p-3 px-6 rounded-full shadow-lg">
                    {/* 🔍 Arama İkonu */}
                    <FaSearch
                        size={20}
                        className="text-gray-600 mr-3 cursor-pointer"
                        onClick={handleSearch}
                    />

                    {/* 🌡️ Sıcaklık Aralığı Girişi */}
                    <input
                        type="text"
                        placeholder="Sıcaklık aralığı girin (örn: 15°-20°)"
                        className="bg-transparent outline-none text-black text-lg w-68"
                        value={temp}
                        onChange={(e) => setTemp(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSearch();
                        }}
                    />
                </div>
            </div>



            {/*
            {/* 📌 Bitki Bilgileri
            {plantNames.length > 0 && (
                <div className="mt-12 max-w-5xl w-full overflow-x-auto px-6">
                    <div className="flex gap-8">
                        {plantNames.map((plant, index) => (
                            <div
                                key={index}
                                className="bg-white bg-opacity-80 backdrop-blur-md p-6 min-w-[250px] rounded-xl shadow-md text-black flex-shrink-0"
                            >
                                <h3 className="text-xl font-bold mb-2 text-green-700">{plant.name}</h3>
                                <p className="text-gray-700"><span className="font-semibold">Yetişme Süresi:</span> {plant.growTime}</p>
                                <p className="text-gray-700"><span className="font-semibold">Sıcaklık Aralığı:</span> {plant.tempRange}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            */}


            {/* // ######################### bu gerçek API Verimiz ################################################################### */}


            {plantNames.length > 0 && (
                <div className="mt-12 max-w-[950px] w-full overflow-x-auto px-4">

                <div className="flex gap-6 w-max">
                        {plantNames.map((plant, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl shadow-lg p-5 w-72 hover:shadow-2xl transition flex-shrink-0"
                            >
                                {/* 🌿 Bitki İsmi */}
                                <h3 className="text-xl font-bold text-center text-green-700 mb-4">
                                    {plant.bitkiIsim}
                                </h3>

                                {/* 🏷️ Bilgi Etiketleri */}
                                <div className="flex flex-col gap-2 text-sm text-gray-800">
                                    {/* Sıcaklık Aralığı */}
                                    <span className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full w-fit">
                                        🌡️ Sıcaklık Aralığı: {plant.altSicaklik}° – {plant.ustSicaklik}°
                                    </span>

                                    {/* Yetişme Süresi */}
                                    <span className="bg-yellow-100 text-yellow-800 font-semibold px-3 py-1 rounded-full w-fit">
                                        ⏱️ Yetişme Süresi: {plant.yetismeSuresi} gün
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}


            {/* // ######################### bu gerçek API Verimiz ################################################################### */}

            {/* 📌 Eğer hata varsa göster */}
            {error && (
                <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg w-96">
                    {error}
                </div>
            )}
        </div>
    );
}
