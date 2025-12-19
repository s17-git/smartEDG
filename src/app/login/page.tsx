"use client";
import { ChatBot } from "@/app/components/ChatBot";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/">
          <div className="flex items-center justify-between pb-6 border-b border-gray-200 ">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors cursor-pointer">
              <span className="text-2xl">←</span> Retour
            </button>
            <button className="text-gray-400 hover:text-gray-600 text-2xl transition-colors cursor-pointer">
              ✕
            </button>
          </div>
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 space-y-8">
          <div className="flex justify-center pt-4">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">
                <Image
                  src="/logo-nb.png"
                  alt="Guinea Smart Logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>

          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Connexion PME
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Accédez à votre espace entreprise
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-semibold text-base">
                <span className="text-xl">✉️</span> Email professionnel
              </label>
              <input
                placeholder="contact@entreprise.gn"
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base"
                type="email"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-semibold text-base">
                <span className="text-xl">🔒</span> Mot de passe
              </label>
              <div className="relative">
                <input
                  placeholder="••••••••"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base"
                  type={showPassword? "text" : "password"}
                />
                <button
                onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 text-lg transition-colors"
                >
                   {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <span>→</span> Se connecter
            </button>
          </form>

          <div className="text-center pt-6 border-t border-gray-200">
            <button className="text-green-600 hover:text-green-700 font-semibold text-base transition-colors">
              Inscrire mon entreprise
            </button>
          </div>
        </div>
      </div>

      <ChatBot />
    </div>
  );
}
