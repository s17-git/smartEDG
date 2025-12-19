"use client";
import { ChatBot } from "@/app/components/ChatBot";
import Link from "next/link";
import { ActionState, registration } from "./actions/actions";
import { useActionState, useState } from "react";

const Registration = () => {
  const initialState: ActionState = {
    error: null,
    errors: {},
    fields: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      password: "",
      confirmPassword: "",
    },
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [state, formAction, isPending] = useActionState(
    registration,
    initialState
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
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

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-full border-4 border-green-200 flex items-center justify-center bg-green-50 shadow-lg">
                <div className="text-6xl">📊</div>
              </div>
              <div className="absolute bottom-0 right-0 w-10 h-10 rounded-full border-4 border-white bg-green-100 flex items-center justify-center shadow-lg">
                <div className="text-lg">👤</div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-3">
            <h1 className="text-xl md:text-2xl text-green-600 font-bold">
              Guinea Smart Electricity
            </h1>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Inscription Manager
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Créez votre compte de gestion EDG
            </p>
          </div>

          <form action={formAction} className="space-y-6">
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-bold text-base">
                <span className="text-xl">👤</span>
                <span className="text-blue-600">Nom</span>
              </label>

              <input
                type="text"
                name="nom"
                defaultValue={state.fields?.nom}
                placeholder="Sidibé"
                className={`w-full px-5 py-4 rounded-2xl border-2  focus:border-green-500
                 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base ${
                   state.errors?.nom ? "border-red-500" : "border-gray-200"
                 }`}
              />
              {state?.errors?.nom && (
                <p className="text-red-500 text-sm">{state.errors.nom[0]}</p>
              )}
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-bold text-base">
                <span className="text-xl">👤</span> Prénom
              </label>
              <input
                placeholder="Mamadou Aliou"
                className={`w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 
                focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base ${
                  state.errors?.prenom ? "border-red-500" : "border-gray-200"
                }`}
                type="text"
                name="prenom"
                defaultValue={state.fields?.prenom}
              />
              {state?.errors?.prenom && (
                <p className="text-red-500 text-sm">{state.errors.prenom[0]}</p>
              )}
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-bold text-base">
                <span className="text-xl">✉️</span> Email professionnel
              </label>
              <input
                placeholder="prenom.nom@edg.gn"
                className={`w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base ${
                  state.errors?.email ? "border-red-500" : "border-gray-200"
                }`}
                type="email"
                name="email"
                defaultValue={state.fields?.email}
              />
              {state?.errors?.email && (
                <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
              )}
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-bold text-base">
                <span className="text-xl">📞</span> Téléphone
              </label>
              <input
                placeholder="+224 XXX XX XX XX"
                className={`w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base ${
                  state.errors?.telephone ? "border-red-500" : "border-gray-200"
                }`}
                type="tel"
                name="telephone"
                defaultValue={state.fields?.telephone}
              />
              {state?.errors?.telephone && (
                <p className="text-red-500 text-sm">
                  {state.errors.telephone[0]}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-bold text-base">
                <span className="text-xl">🔒</span> Mot de passe
              </label>
              <div className="relative">
                <input
                  placeholder="••••••••"
                  className={`w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base ${
                    state.errors?.password
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  defaultValue={state.fields?.password}
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

            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-bold text-base">
                <span className="text-xl">♂️</span> Confirmer le mot de passe
              </label>
              <div className="relative">
                <input
                  placeholder="••••••••"
                  className={`w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base ${
                    state.errors?.confirmPassword
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  defaultValue={state.fields?.confirmPassword}
                />
                <button
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 text-lg transition-colors"
                >
                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            <button
              disabled={isPending}
              className="cursor-pointer w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3 mt-8"
            >
              <span>👤</span>
              {isPending ? "Inscription en cours..." : "S'inscrire"}
            </button>
            {state.error && <p className="text-red-500 mt-2">{state.error}</p>}
          </form>
        </div>
      </div>

      <ChatBot />
    </div>
  );
};

export default Registration;
