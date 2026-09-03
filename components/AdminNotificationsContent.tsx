"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Phone,
  Mail,
  Calendar,
  LogOut,
  CheckCheck,
  Circle,
} from "lucide-react";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Données factices — à remplacer par le fetch Supabase
const demandesInitiales = [
  {
    id: "1",
    nom: "Marie Ngo Bilong",
    telephone: "654 12 34 56",
    email: "marie.ngo@example.com",
    pole: "Santé",
    date: "2026-09-15",
    message: "Je souhaite intégrer la filière Aide-soignante en cours du soir.",
    createdAt: "2026-09-03T09:12:00",
    lu: false,
  },
  {
    id: "2",
    nom: "Junior Fotso",
    telephone: "695 22 11 88",
    email: "",
    pole: "Informatique",
    date: "2026-09-10",
    message: "Renseignement sur la filière Infographie et les frais.",
    createdAt: "2026-09-02T16:40:00",
    lu: false,
  },
  {
    id: "3",
    nom: "Aïcha Djibril",
    telephone: "677 45 90 12",
    email: "aicha.dj@example.com",
    pole: "Restauration",
    date: "",
    message: "",
    createdAt: "2026-09-01T11:05:00",
    lu: true,
  },
];

export default function AdminNotificationsContent() {
  const [demandes, setDemandes] = useState(demandesInitiales);

  const nonLues = demandes.filter((d) => !d.lu).length;

  function marquerCommeLu(id: string) {
    setDemandes((prev) =>
      prev.map((d) => (d.id === id ? { ...d, lu: true } : d))
    );
  }

  function toutMarquerCommeLu() {
    setDemandes((prev) => prev.map((d) => ({ ...d, lu: true })));
  }

  return (
    <div className={`${comfortaa.className} min-h-screen bg-[#FAF8F3] text-[#12232E]`}>

      {/* ================= HEADER ================= */}
      <header className="border-b border-[#12232E]/10 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-[#12232E] text-[#FAF8F3] flex items-center justify-center">
              <Bell size={18} />
              {nonLues > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C9A227] text-[#12232E] text-[10px] font-bold flex items-center justify-center">
                  {nonLues}
                </span>
              )}
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">Notifications</h1>
              <p className="text-xs text-[#12232E]/50">
                {nonLues > 0 ? `${nonLues} nouvelle(s) demande(s)` : "Tout est à jour"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {nonLues > 0 && (
              <button
                onClick={toutMarquerCommeLu}
                className="hidden sm:flex items-center gap-2 text-sm text-[#12232E]/60 hover:text-[#12232E]"
              >
                <CheckCheck size={16} />
                Tout marquer comme lu
              </button>
            )}
            <button
              type="button"
              onClick={() => console.log("TODO: brancher /api/auth/logout")}
              className="flex items-center gap-2 text-sm text-[#12232E]/60 hover:text-[#12232E]"
            >
              <LogOut size={16} />
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      {/* ================= LISTE DES DEMANDES ================= */}
      <main className="max-w-4xl mx-auto px-6 py-10">
        {demandes.length === 0 ? (
          <p className="text-[#12232E]/60 text-center py-16">
            Aucune demande de rendez-vous pour l'instant.
          </p>
        ) : (
          <div className="space-y-3">
            {demandes.map((d, idx) => (
              <motion.button
                key={d.id}
                type="button"
                onClick={() => marquerCommeLu(d.id)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`w-full text-left rounded-md border p-6 transition-colors ${
                  d.lu
                    ? "bg-white border-[#12232E]/10"
                    : "bg-[#C9A227]/[0.06] border-[#C9A227]/40"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {!d.lu && <Circle size={8} className="fill-[#C9A227] text-[#C9A227]" />}
                    <h2 className="font-bold text-lg">{d.nom}</h2>
                  </div>
                  <span className="text-xs bg-[#12232E]/5 px-3 py-1 rounded-full whitespace-nowrap">
                    {d.pole}
                  </span>
                </div>

                <div className="text-sm text-[#12232E]/70 space-y-1">
                  <p className="flex items-center gap-2">
                    <Phone size={14} /> {d.telephone}
                  </p>
                  {d.email && (
                    <p className="flex items-center gap-2">
                      <Mail size={14} /> {d.email}
                    </p>
                  )}
                  {d.date && (
                    <p className="flex items-center gap-2">
                      <Calendar size={14} />
                      {new Date(d.date).toLocaleDateString("fr-FR")}
                    </p>
                  )}
                  {d.message && <p className="mt-2 text-[#12232E]/80">{d.message}</p>}
                </div>

                <p className="text-xs text-[#12232E]/40 mt-3">
                  {new Date(d.createdAt).toLocaleString("fr-FR")}
                </p>
              </motion.button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}