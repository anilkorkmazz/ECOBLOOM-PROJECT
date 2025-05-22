import { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex flex-col min-h-screen">
            {/* Navbar (Arka Planın Üstünde ve Şeffaf) */}
            <nav className="absolute w-full top-0 left-0 right-0 p-4 flex justify-between items-center bg-opacity-30 backdrop-blur-md z-50">
                {/* Logo */}
                <div className="text-2xl font-bold text-white ml-6">ECOBLOOM</div>

                {/* Profil Menüsü */}
                <Menu as="div" className="relative">
                    <MenuButton onClick={() => setIsOpen(!isOpen)} className="flex items-center focus:outline-none">
                        <img
                            src="https://pagedone.io/asset/uploads/1696229994.png"
                            alt="Profile"
                            className="w-12 h-12 rounded-full border-2 border-white cursor-pointer"
                        />
                    </MenuButton>

                    {/* Açılır Menü */}
                    {isOpen && (
                        <MenuItems className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg py-2 border border-gray-200">
                            <MenuItem>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? "bg-red-500 text-white" : "text-gray-900"
                                        } w-full text-left px-4 py-2`}
                                        onClick={() => alert("Logging out...")}
                                    >
                                        Log out
                                    </button>
                                )}
                            </MenuItem>
                        </MenuItems>
                    )}
                </Menu>
            </nav>

            {/* İçerik */}
            <main className="flex-grow">
                <Outlet />
            </main>
        </div>
    );
}
