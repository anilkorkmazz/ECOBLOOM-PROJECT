import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import CompanyImage from "../assets/ecobloom.png";
import { Link as ScrollLink } from "react-scroll";

const navigation = [
    { name: "Ana Sayfa", href: "home" },
    { name: "Özellikler", href: "features" },
    { name: "Hakkımızda", href: "team" },
    { name: "İletişim", href: "contact" },
];

export default function MobileMenu({ open, setOpen }) {
    return (
        <Dialog open={open} onClose={setOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img
                            src={CompanyImage}
                            alt="Logo"
                            className="h-8 w-auto"
                        />
                    </a>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Menüyü Kapat</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                                <ScrollLink
                                    key={item.name}
                                    to={item.href}
                                    smooth={true}
                                    duration={800}
                                    offset={-80}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.name}
                                </ScrollLink>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    );
}
