"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function AdminLoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [erreur, setErreur] = useState("");
  const [chargement, setChargement] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErreur("");
    setChargement(true);

    // TODO: brancher sur /api/auth/login une fois le backend prêt
    console.log("Tentative de connexion :", { email, password });

    setTimeout(() => setChargement(false), 800);
  }

  return (
    <div className={`${comfortaa.className} min-h-screen flex items-center justify-center bg-[#FAF8F3] px-6`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#12232E] text-[#FAF8F3] flex items-center justify-center mb-4">
            <Lock size={24} />
          </div>
          <h1 className="text-2xl font-bold text-[#12232E]">Espace administrateur</h1>
          <p className="text-[#12232E]/60 text-sm mt-2">
            Connectez-vous pour consulter les demandes de rendez-vous.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-md border border-[#12232E]/10 p-8"
        >
          <div className="mb-5">
            <label htmlFor="email" className="block font-medium mb-2 text-[#12232E] text-sm">
              Email
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#12232E]/40" />
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ifpsri.com"
                className="w-full border border-[#12232E]/20 rounded-md pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block font-medium mb-2 text-[#12232E] text-sm">
              Mot de passe
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#12232E]/40" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-[#12232E]/20 rounded-md pl-11 pr-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#12232E]/40 hover:text-[#12232E]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {erreur && <p className="text-red-600 text-sm mb-4">{erreur}</p>}

          <button
            type="submit"
            disabled={chargement}
            className="w-full bg-[#12232E] text-[#FAF8F3] font-semibold py-3 rounded-md hover:bg-[#C9A227] hover:text-[#12232E] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {chargement ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}