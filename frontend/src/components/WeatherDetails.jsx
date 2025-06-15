import { useState } from "react";
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
            console.error("Bitki verileri alınırken hata oluştu:", error);
            setPlantNames([]);
            setError("Bitki verisi mevcut değil!");
        }
    };

    // ######################### bu gerçek API Verimiz ###################################################################




    return (
        <div className="relative isolate min-h-screen px-6 pt-14 lg:px-8 flex flex-col items-center justify-center">

            {/* 🔹 ÜST DEKOR */}
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



            {/* 🔙 Geri Butonu */}
            <button
                onClick={() => window.history.back()}
                className="absolute top-6 left-6 flex items-center gap-2 bg-white bg-opacity-80 px-4 py-2 rounded-full shadow hover:bg-opacity-100 transition"
            >
                <FaArrowLeft className="text-green-700" size={20} />
                <span className="text-green-700 font-semibold">Geri</span>
            </button>




            {/* Sayfa Başlığı */}
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">Sıcaklığa Göre Öneri</h1>
            <p className="text-gray-500 text-center text-lg max-w-xl mb-4">
                Belirttiğin sıcaklık aralığında yetişebilecek bitkileri senin için listeliyoruz.
            </p>



            {/* Arama ve Parametre Girişi */}
            <div className="relative flex flex-col items-center gap-4">
                <div className="flex items-center bg-white border border-gray-200 shadow-lg p-3 px-6 rounded-full w-[320px] sm:w-[450px]">
                    <FaSearch
                        size={20}
                        className="text-gray-600 mr-3 cursor-pointer"
                        onClick={handleSearch}
                    />
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



            {/* 📌 Bitki Kartları */}
            {plantNames.length > 0 && (
                <div className="mt-12 max-w-[950px] w-full overflow-x-auto px-4">
                    <div className="flex gap-6 w-max">
                        {plantNames.map((plant, index) => (
                            <div
                                key={index}
                                className=" rounded-xl p-5 w-72 flex-shrink-0"
                            >
                                <h3 className="text-xl font-bold text-center text-green-700 mb-4">
                                    {plant.bitkiIsim}
                                </h3>
                                <div className="flex flex-col gap-2 text-sm text-gray-800">
                                    <span className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full w-fit">
                                        🌡️ Sıcaklık Aralığı: {plant.altSicaklik}° – {plant.ustSicaklik}°
                                    </span>
                                    <span className="bg-yellow-100 text-yellow-800 font-semibold px-3 py-1 rounded-full w-fit">
                                        ⏱️ Yetişme Süresi: {plant.yetismeSuresi} gün
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}



            {/* 📌 Hata Mesajı */}
            {error && (
                <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg w-96">
                    {error}
                </div>
            )}



            {/* 🔹 ALT DEKOR */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-35rem)]"
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
