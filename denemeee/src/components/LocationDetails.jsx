import { useState, useEffect } from "react";
import backgroundImage from "../assets/EnterLocation.png";
import {FaArrowLeft, FaSearch} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";




{/*
// Şehir listesi
const turkishCities = [
    "Adana", "Ankara", "İstanbul", "İzmir", "Antalya", "Bursa", "Mersin", "Eskişehir", "Trabzon", "Konya"
];
*/}


// 📌 TEST AMAÇLI ÖRNEK BİTKİ VERİLERİ
const testPlantData = {
    "İstanbul": [
        { name: "Tulip 🌷", growTime: "6-8 ay", tempRange: "12° - 20°" },
        { name: "Chestnut Tree 🌰", growTime: "18-24 ay", tempRange: "10° - 18°" }
    ],
    "İzmir": [
        { name: "Olive Tree 🫒", growTime: "24-36 ay", tempRange: "15° - 30°" },
        { name: "Olive Tree 🫒", growTime: "24-36 ay", tempRange: "15° - 30°" },
        { name: "Olive Tree 🫒", growTime: "24-36 ay", tempRange: "15° - 30°" },
        { name: "Olive Tree 🫒", growTime: "24-36 ay", tempRange: "15° - 30°" },
        { name: "Olive Tree 🫒", growTime: "24-36 ay", tempRange: "15° - 30°" },
        { name: "Olive Tree 🫒", growTime: "24-36 ay", tempRange: "15° - 30°" },
        { name: "Olive Tree 🫒", growTime: "24-36 ay", tempRange: "15° - 30°" }
    ],

    "Ankara": [
        { name: "Lavender 💜", growTime: "5-7 ay", tempRange: "10° - 20°" },
        { name: "Thyme 🌱", growTime: "4-6 ay", tempRange: "12° - 22°" }
    ],
    "Antalya": [
        { name: "Orange Tree 🍊", growTime: "12-18 ay", tempRange: "18° - 30°" },
        { name: "Lemon Tree 🍋", growTime: "12-18 ay", tempRange: "17° - 28°" },
        { name: "Aloe Vera 🌵", growTime: "6-9 ay", tempRange: "16° - 25°" }
    ],
    "Bursa": [
        { name: "Cherry Tree 🍒", growTime: "24-30 ay", tempRange: "12° - 20°" },
        { name: "Walnut Tree 🌰", growTime: "36-48 ay", tempRange: "10° - 18°" }
    ],
    "Mersin": [
        { name: "Banana Plant 🍌", growTime: "12-15 ay", tempRange: "20° - 28°" },
        { name: "Palm Tree 🌴", growTime: "36-60 ay", tempRange: "22° - 30°" }
    ]
};


export default function LocationDetails() {
    const [location, setLocation] = useState("");
    const [showList, setShowList] = useState(false);
    const [plantNames, setPlantNames] = useState([]);
    const [error, setError] = useState("");
    const [cities, setCities] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("https://turkiyeapi.dev/api/v1/provinces")
            .then(res => {
                const cityList = res.data.data.map(item => item.name);
                setCities(cityList);
            })
            .catch(err => {
                console.error("Şehirler alınamadı:", err);
                setCities([]); // fallback
            });
    }, []);


    const filteredCities = location
        ? cities.filter(city => city.toLocaleLowerCase("tr-TR").startsWith(location.toLocaleLowerCase("tr-TR")))
        : [];


    {/*

    // Şehir seçildiğinde bitki listesini getir
    const handleCitySelect = (city) => {
        setLocation(city);
        setShowList(false);
        setError("");

        // 📌 TEST AMAÇLI ÖRNEK VERİLERİ KULLANIYORUZ
        const plants = testPlantData[city] || [];
        setPlantNames(plants);

        if (plants.length === 0) {
            setError("⚠️ Bu şehir için öneri bulunamadı.");
        }


        // // 📌 GERÇEK API BAĞLANTISI (Şimdilik devre dışı)
        // try {
        //     const response = await axios.get(`http://localhost:5000/api/plants?city=${city}`);
        //     setPlantNames(response.data.plantNames || []);
        // } catch (error) {
        //     console.error("Error fetching plant data:", error);
        //     setPlantNames([]);
        //     setError("⚠️ No plant data available!");
        // }




    };

    */}





   // ######################### bu gerçek API Verimiz #################################################################


    const handleCitySelect = async (city) => {
        setLocation(city);
        setShowList(false);
        setError("");
        setPlantNames([]);

        try {
            const response = await axios.get("http://localhost:8081/bitki-isimleri/get-bitki-isimleri-list-by-konum", {
                params: {
                    konum: city
                }
            });
            const plants = response.data || [];
            setPlantNames(plants);

            if (plants.length === 0) {
                setError("⚠️ Bu şehir için öneri bulunamadı.");
            }
        } catch (error) {
            console.error("Error fetching plant data:", error);
            setPlantNames([]);
            setError("⚠️ Sunucudan veri alınamadı.");
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
                className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 border border-white/30 text-white px-4 py-2 rounded-full hover:bg-white/60 transition backdrop-blur-md shadow-md"
            >
                <FaArrowLeft/>
                <span className="font-medium">Geri</span>
            </button>

            <h1 className="text-4xl font-semibold text-white mb-8">Lokasyona Göre Öneri</h1>

            {/* Şehir Arama */}
            <div className="relative w-96">
                <div className="flex items-center bg-green-200 bg-opacity-80 p-3 rounded-lg shadow-lg">
                    <input
                        type="text"
                        placeholder="Şehir ismi giriniz"
                        className="flex-grow text-lg bg-transparent outline-none text-black placeholder-gray-700 px-3"
                        value={location}
                        onChange={(e) => {
                            setLocation(e.target.value);
                            setShowList(true);
                        }}
                    />
                    <button className="text-gray-700 hover:text-gray-900">
                        <FaSearch size={20} />
                    </button>
                </div>

                {showList && filteredCities.length > 0 && (
                    <ul className="absolute z-50 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-md max-h-48 overflow-y-auto">
                    {filteredCities.map((city, index) => (
                            <li
                                key={index}
                                className="p-3 hover:bg-green-100 cursor-pointer"
                                onClick={() => handleCitySelect(city)}
                            >
                                {city}
                            </li>
                        ))}
                    </ul>
                )}
            </div>


            {/*
            {/* 📌 Bitki İsimleri Liste Olarak Gösteriliyor
            {plantNames.length > 0 && (
                <div className="mt-12 max-w-5xl w-full overflow-x-auto px-2">
                    <div className="flex gap-6">
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
                <div className="mt-12 max-w-5xl w-full overflow-x-auto px-2 relative z-10">
                <div className="flex gap-6">

                    {plantNames.length > 0 && (
                        <div className="mt-12 w-full overflow-x-auto px-4">
                            <div className="flex gap-6 w-max">
                                {plantNames.map((plant, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-3xl shadow-lg p-5 w-72 hover:shadow-2xl transition flex-shrink-0"
                                    >
                                        {/* Bitki İsmi */}
                                        <h3 className="text-xl font-bold text-center text-green-700 mb-4">
                                            {plant.bitkiIsim}
                                        </h3>

                                        {/* Etiketler */}
                                        <div className="flex flex-col gap-2 text-sm text-gray-800">
                                            <span className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full w-fit">
                                               🌡️ Sıcaklık Aralığı:  {plant.altSicaklik}° – {plant.ustSicaklik}°
                                            </span>
                                            <span className="bg-yellow-100 text-yellow-800 font-semibold px-3 py-1 rounded-full w-fit">
                                                ⏱️ Yetişme Süresi: {plant.yetismeSuresi} gün
                                            </span>
                                        </div>

                                        {/* Yetişme Tarihleri */}
                                        {plant.yetismeTarihleri?.length > 0 && (
                                            <div className="mt-4 text-sm text-gray-600 max-h-32 overflow-y-auto pr-1">
                                                <p className="font-semibold mb-1">📅 Yetişme Tarihleri:</p>
                                                <ul className="space-y-1">
                                                    {plant.yetismeTarihleri.map((aralik, i) => (
                                                        <li key={i}>
                                                            {new Date(aralik.baslangic).toLocaleDateString("tr-TR")} –{" "}
                                                            {new Date(aralik.bitis).toLocaleDateString("tr-TR")}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}



                </div>
                </div>
            )}

            {/*// ######################### bu gerçek API Verimiz ################################################################### */}






            {/* 📌 Eğer hata varsa göster */}
            {error && (
                <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg w-96">
                    {error}
                </div>
            )}
        </div>
    );
}
