import { EnvelopeIcon, UsersIcon, TrashIcon } from "@heroicons/react/24/outline";
import { FaMapMarkedAlt, FaCloudSunRain, FaRobot } from "react-icons/fa";
import { GiTreeBranch,GiPlantSeed, GiTalk } from "react-icons/gi";


const features = [

    {
        title: "Hava Durumuna Göre Seçim",
        description: "Girdiğiniz sıcaklık aralığına göre bitki önerileri al.",
        icon: GiTreeBranch,
        link: "/weather-details",
    },

    {
        title: "Konumuna Uygun Bitkiler",
        description: "Yaşadığınız şehirde en iyi yetişen bitkileri kolayca öğren.",
        icon: GiPlantSeed,
        link: "/location-details",
    },

    {
        title: "Sohbetle Bitki Keşfet",
        description: "Soru sor, öneri al. Bitki asistanın her zaman yanında!",
        icon: GiTalk,
        link: "/chatbot",
    },
];



export default function Features() {
    return (
        <section className="py-24 relative isolate flex flex-col items-center justify-center  px-6 py-24 sm:py-32 lg:px-0 ">

            {/* Blur Arka Plan  (üst) */}
            <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-1155/678 w-[72.1875rem] bg-gradient-to-tr from-[#a8e6cf] to-[#56ab2f] opacity-30"
                />
            </div>


            {/* Başlık ve Açıklama */}
            <div className="max-w-2xl text-center">
                <h2 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                    Doğayı Tanı, Bitkileri Keşfet
                </h2>
                <p className="mt-6 text-lg text-gray-600">
                    Hava durumu, konum ve akıllı asistan desteğiyle sana en uygun bitkileri öneriyoruz. Doğa ile uyumlu yaşamak artık çok kolay!
                </p>
            </div>

            {/* Özellikler Grid Yapısı */}
            <div className="mt-12 max-w-5xl w-full grid gap-12 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-start">
                        {/* İkon (Sola Yaslı) */}
                        <div className="h-16 w-16 flex items-center justify-center text-indigo-600 mb-4">
                            <feature.icon className="h-12 w-12" />
                        </div>

                        {/* Metinler (Soldan Hizalı) */}
                        <div className="text-left">
                            <h3 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-xl">{feature.title}</h3>

                            <p className="mt-2 text-gray-600">{feature.description}</p>
                            {/* Learn More Link */}
                            <a href={feature.link} className="mt-4 text-indigo-600 font-semibold flex items-center gap-1 hover:underline hover:text-indigo-500">
                                Daha fazla öğren →
                            </a>
                        </div>
                    </div>
                ))}
            </div>



        </section>
    );
}
