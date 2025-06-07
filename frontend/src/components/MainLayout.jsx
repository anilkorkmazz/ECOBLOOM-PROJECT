import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
    const location = useLocation();

    // Login sayfasında Navbar ve Footer'ı göstermiyoruz
    const hideNavbar = location.pathname === "/login";

    return (
        <>
            {!hideNavbar && <Navbar />}
            <main className="flex-grow pt-16">
                <Outlet />
            </main>
            {!hideNavbar && <Footer />}
        </>
    );
}
