import { useNavigate } from "react-router-dom";
import chatbotImage from "../assets/Chatbot.png";

export default function ChatBotCard() {
    const navigate = useNavigate();

    return (
        <div className="relative flex flex-col items-center text-white cursor-pointer" onClick={() => navigate("/chatbot")}>
            {/* Başlık */}
            <h2 className="text-2xl font-semibold mb-6 hover:underline">Bitki Asistanı</h2>

            {/* ChatBot Görseli ve Çerçeve */}
            <div className="relative flex items-center justify-center w-96 h-96">
                {/* ChatBot Görseli */}
                <img
                    src={chatbotImage}
                    alt="ChatBot"
                    className="w-48 sm:w-64 lg:w-72 max-w-full drop-shadow-lg transition-transform duration-300 hover:scale-105"
                />
            </div>
        </div>
    );
}
