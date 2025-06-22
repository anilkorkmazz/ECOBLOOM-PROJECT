import { useNavigate } from "react-router-dom";
import chatbotImage from "../assets/Chatbot.png";

export default function ChatBotCard() {
    const navigate = useNavigate();

    return (
        <div
            className="relative flex flex-col items-center rounded-2xl p-8 hover:shadow-lg transition cursor-pointer text-center max-w-xs"
            onClick={() => navigate("/chatbot")}
        >
            {/* Başlık */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bitki Asistanı</h2>

            {/* Açıklama */}
            <p className="text-gray-600 text-sm mb-6">
                Doğal dilde sohbet ederek sana en uygun bitkiyi öneren asistanı dene.
            </p>

            {/* Görsel */}
            <div className="relative w-full flex justify-center">
                <img
                    src={chatbotImage}
                    alt="ChatBot"
                    className="w-40 sm:w-48 lg:w-56 drop-shadow-xl transition-transform duration-300 hover:scale-105"
                />
            </div>
        </div>
    );
}
