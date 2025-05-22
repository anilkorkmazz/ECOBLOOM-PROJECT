import { useState } from "react";
import backgroundImage from "../assets/user-chatbot.jpg";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";




const botProfile = "https://cdn-icons-png.flaticon.com/512/4712/4712036.png"; // 📌 Bot profil resmi
const userProfile = "https://randomuser.me/api/portraits/women/44.jpg"; // 📌 Kullanıcı profil resmi

{/*
export default function ChatBotDetails() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hey, how can I help you? 😊" }
    ]);
    const [input, setInput] = useState("");

    const handleSendMessage = () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        setTimeout(() => {
            setMessages([...newMessages, { sender: "bot", text: "I'm still learning! 🌱" }]);
        }, 1000);
    };




    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >


            <button
                onClick={() => window.history.back()}
                className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 border border-white/30 text-green px-4 py-2 rounded-full hover:bg-white/60 transition backdrop-blur-md shadow-md"
            >
                <FaArrowLeft/>
                <span className="font-medium">Geri</span>
            </button>




            <div className="absolute top-0 right-0 h-full w-146 bg-transparent shadow-lg flex flex-col rounded-l-2xl border border-white border-opacity-20">

                <div className="flex items-center justify-between bg-transparent p-8 shadow-md rounded-tl-2xl border-b border-white border-opacity-30 bg-green">
                    <div className="flex items-center space-x-3">
                        <img src={botProfile} alt="Bot" className="w-20 h-20 rounded-full border-2 border-white" />
                        <div>
                            <h2 className="text-lg font-bold text-white">My Only Bestie</h2>
                            <p className="text-sm text-gray-200">Online</p>
                        </div>
                    </div>
                    <button className="text-white text-xl hover:text-gray-300" onClick={() => window.history.back()}>
                        <FaTimes />
                    </button>
                </div>


                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                            {msg.sender === "bot" && (
                                <img src={botProfile} alt="Bot" className="w-8 h-8 rounded-full mr-2" />
                            )}
                            <div
                                className={`p-3 rounded-lg shadow-lg ${
                                    msg.sender === "user"
                                        ? "bg-green-500 bg-opacity-70 text-white max-w-xs"
                                        : "bg-white bg-opacity-20 text-gray-900 max-w-xs border border-white border-opacity-20 backdrop-blur-sm"
                                }`}
                            >
                                {msg.text}
                            </div>
                            {msg.sender === "user" && (
                                <img src={userProfile} alt="User" className="w-8 h-8 rounded-full ml-2" />
                            )}
                        </div>
                    ))}
                </div>


                <div className="flex items-center p-4 border-t border-white border-opacity-30 bg-transparent rounded-bl-2xl">
                    <input
                        type="text"
                        className="flex-grow p-2 border border-white border-opacity-30 rounded-lg outline-none bg-transparent text-white placeholder-white"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <button
                        className="ml-3 bg-green-500 bg-opacity-70 text-white p-2 rounded-full shadow-lg hover:bg-green-600"
                        onClick={handleSendMessage}
                    >
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
        </div>
    );
}

*/}




// ###################################### GERÇEK API ########################################################
export default function ChatBotDetails() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Selam, Size nasıl yardımcı olabilirim? 😊" }
    ]);
    const [input, setInput] = useState("");

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        // Mesajı POST isteği ile backend'e gönder
        try {
            const response = await fetch("http://127.0.0.1:5000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ sentence: input })
            });

            const data = await response.json();

            let botResponse = ""; // Başlangıçta boş bir yanıt

            // Backend'ten gelen message'ı ekle
            if (data.message) {
                botResponse = data.message; // Backend'den gelen genel message
            }

            // Bitki bakım bilgisi varsa, önce bunu göster
            if (data.bitki_bakim) {
                botResponse = `${data.bitki_name.toLocaleUpperCase('tr-TR')} Bakımı: ${data.bitki_bakim}`;
            }

            // Market bilgisi varsa, bunu da ekle
            if (data.market) {
                const marketInfo = `${data.bitki_name.toLocaleUpperCase('tr-TR')} bitkisini satın alabileceğiniz yerler: ${data.market.join(', ')}`;
                botResponse = `${botResponse}\n\n${marketInfo}`;
            }

            // Eğer "bitki_bakim" ve "market" yoksa, "Hala öğreniyorum!" yazısı ekle
            if (!data.bitki_bakim && !data.market && !data.message) {
                botResponse = "Hala öğreniyorum! 🤖";
            }

            // Yeni bot mesajını set et
            setMessages([...newMessages, { sender: "bot", text: botResponse }]);

        } catch (error) {
            console.error("Error sending message:", error);
            setMessages([...newMessages, { sender: "bot", text: "Veri şu anda alınamıyor. Lütfen tekrar deneyin!" }]);
        }
    };

    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >

            {/* 🔙 Geri Butonu */}

            <button
                onClick={() => window.history.back()}
                className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 border border-white/30 text-green px-4 py-2 rounded-full hover:bg-white/60 transition backdrop-blur-md shadow-md"
            >
                <FaArrowLeft />
                <span className="font-medium">Geri</span>
            </button>


            {/* ChatBot Paneli */}
            <div className="absolute top-0 right-0 h-full w-146 bg-transparent shadow-lg flex flex-col rounded-l-2xl border border-white border-opacity-20">
                {/* Üst Başlık & Profil */}
                <div className="flex items-center justify-between bg-transparent p-8 shadow-md rounded-tl-2xl border-b border-white border-opacity-30 bg-green">
                    <div className="flex items-center space-x-3">
                        <img src={botProfile} alt="Bot" className="w-20 h-20 rounded-full border-2 border-white" />
                        <div>
                            <h2 className="text-lg font-bold text-white">My Only Bestie</h2>
                            <p className="text-sm text-gray-200">Online</p>
                        </div>
                    </div>
                    <button className="text-white text-xl hover:text-gray-300" onClick={() => window.history.back()}>
                        <FaTimes />
                    </button>
                </div>

                {/* Mesajlar */}

                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                            {msg.sender === "bot" && (
                                <img src={botProfile} alt="Bot" className="w-8 h-8 rounded-full mr-2" />
                            )}
                            <div
                                className={`p-3 rounded-lg shadow-lg ${msg.sender === "user"
                                    ? "bg-green-500 bg-opacity-70 text-white max-w-xs"
                                    : "bg-white bg-opacity-20 text-gray-900 max-w-xs border border-white border-opacity-20 backdrop-blur-sm"
                                }`}
                            >
                                {msg.text}
                            </div>
                            {msg.sender === "user" && (
                                <img src={userProfile} alt="User" className="w-8 h-8 rounded-full ml-2" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Mesaj Gönderme Alanı */}
                <div className="flex items-center p-4 border-t border-white border-opacity-30 bg-transparent rounded-bl-2xl">
                    <input
                        type="text"
                        className="flex-grow p-2 border border-white border-opacity-30 rounded-lg outline-none bg-transparent text-white placeholder-white"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <button
                        className="ml-3 bg-green-500 bg-opacity-70 text-white p-2 rounded-full shadow-lg hover:bg-green-600"
                        onClick={handleSendMessage}
                    >
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
        </div>
    );
}

// ###################################### GERÇEK API ########################################################


