import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from 'react-router-dom';
import CompanyImage from "../assets/Logo.png";



const navigation = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Özellikler", href: "#features" },
    { name: "Hakkımızda", href: "#team" },
    { name: "İletişim", href: "#contact" },
];


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt="Company Logo"
                                src={CompanyImage}
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <ScrollLink
                                key={item.name}
                                to={item.href.replace("#", "")}
                                smooth={true}
                                duration={800}
                                className="text-sm font-semibold text-gray-900 cursor-pointer"
                            >
                                {item.name}
                            </ScrollLink>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to="/dashboard" className="text-sm font-semibold text-gray-900">
                            Hemen Başla →
                        </Link>
                    </div>
                </nav>
                <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
            </header>
        </div>
    );
}
