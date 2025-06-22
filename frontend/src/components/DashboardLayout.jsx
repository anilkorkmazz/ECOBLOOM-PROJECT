import { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Outlet } from "react-router-dom";
import CompanyImage from "../assets/Logo.png";


export default function DashboardLayout() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white">
            {/* Navbar */}
            <header className="absolute inset-x-0 top-0 z-50">
                <nav
                    className="flex items-center justify-between p-6 lg:px-8"
                    aria-label="Dashboard Navigation"
                >
                    {/* Logo */}
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">ECOBLOOM</span>
                            <img
                                alt="Company Logo"
                                src={CompanyImage}
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>

                    {/* Sağda sadece profil menüsü */}
                    <div className="flex lg:flex-1 lg:justify-end" />
                </nav>
            </header>

            {/* Sayfa içeriği */}
            <main className="flex-grow pt-24">
                <Outlet />
            </main>
        </div>
    );
}
