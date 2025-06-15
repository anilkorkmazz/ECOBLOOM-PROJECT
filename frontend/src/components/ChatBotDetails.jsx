import { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaArrowLeft } from "react-icons/fa";
import botProfile from "../assets/ecobloom.png";


export default function ChatBotDetails() {
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Merhaba 👋 Sana bitki önerilerinde yardımcı olabilirim. Hangi konuda bilgi istersin?",
        },
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef(null);
    const [expandedMessages, setExpandedMessages] = useState({});



    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    const toggleExpanded = (index) => {
        setExpandedMessages((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };


    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        try {
            const response = await fetch("http://127.0.0.1:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sentence: input }),
            });

            const data = await response.json();
            let botResponse = data.message || "Hala öğreniyorum! 🤖";

            if (data.bitki_bakim) {
                botResponse = `${data.bitki_name.toUpperCase()} Bakımı:\n${data.bitki_bakim}`;
            }

            if (data.market) {
                botResponse += `\n\nSatın alınabilecek yerler: ${data.market.join(", ")}`;
            }

            setMessages([...newMessages, { sender: "bot", text: botResponse }]);
        } catch (err) {
            console.error("Mesaj gönderme hatası:", err);
            setMessages([
                ...newMessages,
                { sender: "bot", text: "⚠️ Yanıt alınamadı. Lütfen tekrar deneyin." },
            ]);
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col pt-20">
            {/* Üst Dekor */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a8e6cf] to-[#56ab2f] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>



            {/* Başlık */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 border-b border-gray-200 shadow-sm">
                {/* 🔙 Geri Butonu */}
                <button
                    onClick={() => window.history.back()}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 flex items-center gap-2 bg-white bg-opacity-80 px-4 py-2 rounded-full shadow hover:bg-opacity-100 transition"
                >
                    <FaArrowLeft className="text-green-700" size={20} />
                    <span className="text-green-700 font-semibold">Geri</span>
                </button>

                <div className="max-w-3xl mx-auto px-4 py-4 text-center">
                    <h1 className="text-lg font-semibold">Bitki Asistanı</h1>
                </div>
            </header>


            {/* Mesajlar */}
            <main className="flex-grow w-full max-w-3xl mx-auto px-4 pt-24 pb-6 space-y-6">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex items-start gap-3 ${
                            msg.sender === "user" ? "justify-end" : "justify-start"
                        }`}
                    >
                        {msg.sender === "bot" && (
                            <img
                                src={botProfile}
                                alt="Bot"
                                className="w-10 h-10 rounded-full mt-1"
                            />
                        )}
                        <div
                            className={`p-4 rounded-2xl shadow-sm max-w-xs sm:max-w-md whitespace-pre-line leading-relaxed text-sm overflow-y-auto max-h-60 ${
                                msg.sender === "user"
                                    ? "bg-green-100 text-gray-800 rounded-br-none"
                                    : "bg-gray-100 text-gray-900 rounded-bl-none"
                            }`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}

                <div ref={bottomRef} />
            </main>

            {/* Giriş alanı */}
            <footer className="w-full border-t border-gray-200 sticky bottom-0 z-10 bg-white/70 backdrop-blur-md">
                <div className="max-w-3xl mx-auto px-4 py-4">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Mesajınızı yazın..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                            className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-green-400"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                        >
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            </footer>




            {/* Alt Dekor */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-60rem)]"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a8e6cf] to-[#56ab2f] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
    );
}
