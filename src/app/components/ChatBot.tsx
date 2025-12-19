"use client";

import { useState } from "react";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
  time: string;
};

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour! Je suis EVA, votre assistant IA. Comment puis-je vous aider aujourd'hui?",
      sender: "bot",
      time: "14:32",
    },
    {
      id: 2,
      text: "Comment payer ma facture d'électricité ?",
      sender: "user",
      time: "14:33",
    },
    {
      id: 3,
      text: '"Factures" de votre tableau de bord. Vous pouvez payer par Orange Money, MTN Money, Moov Money ou carte bancaire. Tous les paiements sont sécurisés et traités instantanément.',
      sender: "bot",
      time: "14:34",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-6 w-80 sm:w-96 h-[600px] max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col border border-gray-100 animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div
            className="p-4 flex items-center justify-between text-white shrink-0"
            style={{
              background:
                "linear-gradient(135deg, rgb(255, 50, 50) 0%, rgb(200, 150, 50) 50%, rgb(50, 200, 100) 100%)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center text-xl">
                🤖
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">
                  EVA - Assistant IA
                </h3>
                <p className="text-[10px] opacity-90">En ligne - Disponible 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 bg-gray-50 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-green-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-gray-400 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Input */}
          <div className="p-3 bg-white border-t border-gray-100 shrink-0">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Posez votre question..."
                className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
              />
              <button
                onClick={handleSendMessage}
                className="w-9 h-9 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform rotate-90"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-[9px] text-gray-400 flex items-center justify-center gap-1">
                <span>✓</span> EVA utilise l'IA pour vous répondre
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40"
          style={{
            background:
              "linear-gradient(135deg, rgb(255, 154, 86) 0%, rgb(255, 213, 111) 50%, rgb(86, 216, 150) 100%)",
          }}
        >
          🤖
          <div className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg"></div>
        </button>
      )}
    </>
  );
};
