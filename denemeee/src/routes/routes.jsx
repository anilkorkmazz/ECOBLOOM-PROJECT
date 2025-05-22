import MainLayout from "../components/MainLayout.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Features from "../components/Features.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Team from "../components/Team.jsx";
import Contact from "../components/Contact.jsx";
import Pricing from "../components/Pricing.jsx";
import Login from "../components/Login.jsx";
import Dashboard from "../components/Dashboard.jsx";
import WeatherDetails from "../components/WeatherDetails.jsx";
import LocationDetails from "../components/LocationDetails.jsx";
import ChatBotDetails from "../components/ChatBotDetails.jsx";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: (
                    <>
                        <section id="home" className="py-24 bg-white">
                            <HeroSection />
                        </section>
                        <section id="features" className="py-24 bg-white">
                            <Features />
                        </section>
                        <section id="testimonials" className="py-24 bg-white">
                            <Testimonials />
                        </section>
                        <section id="team" className="py-24 bg-white">
                            <Team />
                        </section>
                        <section id="contact" className="py-24 bg-white">
                            <Contact />
                        </section>
                    </>
                ),
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            { index: true, element: <Dashboard /> }
        ],
    },
    {
        path: "/weather-details",
        element: <WeatherDetails />,
    },
    {
        path: "/location-details",
        element: <LocationDetails />,
    },
    {
        path: "/chatbot",
        element: <ChatBotDetails />,
    },
];

export default routes;
