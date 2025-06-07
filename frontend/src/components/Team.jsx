import { FaLinkedin, FaGithub } from "react-icons/fa";

const teamMembers = [
    {
        name: "Anıl Korkmaz",
        position: "Frontend Geliştirici",
        image: "src/assets/anilkorkmaz.jpg",
        bio: "Kullanıcı arayüzlerini şık ve işlevsel hale getiren, React ve Tailwind tutkunu bir geliştirici.",
        linkedin: "https://www.linkedin.com/in/anilkorkmazz/",
        github: "https://github.com/anilkorkmazz",
    },
    {
        name: "İbrahim Halil Özdemir",
        position: "Backend Geliştirici",
        image: "src/assets/ibrahim-ozdemir.jpeg",
        bio: "Veri tabanı ve API tasarımı konusunda güçlü; FastAPI ve .NET ile sistemin kalbini yazıyor.",
        linkedin: "https://www.linkedin.com/in/ibrahim-halil-özdemir-9a20a7257",
        github: "https://github.com/ibrahimozdemir1",
    },
    {
        name: "Mustafa Eren Yurdaşan",
        position: "Yapay Zeka & Sohbet Botu Geliştirici",
        image: "src/assets/eren-yurdasan.jpeg",
        bio: "Makine öğrenimi tabanlı ChatBot geliştirerek kullanıcılarla doğal dilde etkileşim sağladı.",
        linkedin: "http://www.linkedin.com/in/eren-yurdasan-986695367",
        github: "#",
    }
];

export default function Team() {
    return (
        <section className="relative isolate flex flex-col items-center justify-center py-16 px-6 lg:px-12">

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
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-indigo-600">
                    Ekibimiz
                </h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                    Ekibimizle Tanışın
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
                Bitkileri daha yakından tanımanıza yardımcı olan, teknolojiyi doğayla harmanlayan üç kişilik bir ekip.
            </p>

            {/* Team Members Grid */}
            <div className="mt-20 max-w-7xl w-full grid gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-center">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-48 h-48 rounded-full object-cover mb-4 shadow-lg"
                        />
                        <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-md text-indigo-600">{member.position}</p>
                        <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-xs">
                            {member.bio}
                        </p>
                        <div className="mt-4 flex gap-4">
                            <a href={member.linkedin} className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition">
                                <FaLinkedin size={20} />
                            </a>
                            <a href={member.github} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-900 transition">
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
