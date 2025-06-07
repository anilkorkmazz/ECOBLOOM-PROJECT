import { FaFacebook, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";
import CompanyImage from "../assets/ecobloom.png";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6 lg:px-12 lg:py-30">
            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Logo & Socials */}
                <div>
                    <div className="flex items-center space-x-2">
                        <img
                            alt="Company Logo"
                            src={CompanyImage}
                            className="h-8 w-auto"
                        />
                    </div>
                    <p className="mt-4 text-gray-400 text-sm">
                        Doğayı keşfet, bitkileri tanı ve yaşadığın ortama en uygun bitkileri bul.
                    </p>
                    <div className="flex space-x-4 mt-5 text-gray-400">
                        <a href="#" className="hover:text-indigo-400"><FaFacebook size={20} /></a>
                        <a href="#" className="hover:text-indigo-400"><FaInstagram size={20} /></a>
                        <a href="#" className="hover:text-indigo-400"><FaXTwitter size={20} /></a>
                        <a href="#" className="hover:text-indigo-400"><FaGithub size={20} /></a>
                        <a href="#" className="hover:text-indigo-400"><FaYoutube size={20} /></a>
                    </div>
                </div>

                {/* Solutions */}
                <div>
                    <h3 className="text-white font-semibold text-lg">Çözümlerimiz</h3>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-indigo-400">Şehir Bazlı Bitki Bul</a></li>
                        <li><a href="#" className="hover:text-indigo-400">Hava Durumuna Göre Öneri</a></li>
                        <li><a href="#" className="hover:text-indigo-400">ChatBot ile Bitki Tanı</a></li>
                    </ul>
                </div>

                {/* Support */}
                {/*}
                <div>
                    <h3 className="text-white font-semibold text-lg">Support</h3>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-indigo-400">Submit Ticket</a></li>
                        <li><a href="#" className="hover:text-indigo-400">Documentation</a></li>
                        <li><a href="#" className="hover:text-indigo-400">Guides</a></li>
                    </ul>
                </div>
                */}

                {/* Company & Legal */}
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-white font-semibold text-lg">Hakkımızda</h3>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-indigo-400">Biz Kimiz</a></li>
                            <li><a href="#" className="hover:text-indigo-400">Ekibimiz</a></li>
                            <li><a href="#" className="hover:text-indigo-400">Proje Amacımız</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg">Yasal</h3>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-indigo-400">Kullanım Şartları</a></li>
                            <li><a href="#" className="hover:text-indigo-400">Gizlilik Politikası</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
                © {new Date().getFullYear()} ECOBLOOM. Tüm hakları saklıdır.
            </div>
        </footer>
    );
}
