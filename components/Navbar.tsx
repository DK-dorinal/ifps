"use client";

import Link from "next/link";
import { useState } from "react";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

interface FloatingMenuProps {
  notificationCount?: number;
  onNotificationClick?: () => void;
}

export default function HomePage({
  notificationCount = 3,
  onNotificationClick,
}: FloatingMenuProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* HEADER PRINCIPAL - 10vh */}
      <header
        className={`${comfortaa.className} fixed left-1/2 top-5 z-[1000] flex h-[10vh] max-h-[110px] min-h-[70px] w-[92%] max-w-[1200px] -translate-x-1/2 items-center justify-between rounded-full bg-[rgba(255,255,255,0.9)] backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-6 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] md:px-4 sm:w-[96%] sm:h-[10vh] sm:min-h-[60px]`}
      >
        {/* LOGO À GAUCHE, EN DÉBORDEMENT - 40px sur mobile */}
        <Link
          href="/"
          className="absolute left-6 -top-1 z-10 flex-shrink-0 md:left-4 md:-top-6 sm:left-2 sm:top-0"
        >
          <img
            src="/logo.png"
            alt="IFPS Ngousso Logo"
            className="h-20 w-auto object-contain transition-all duration-500 ease-out hover:scale-105 drop-shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:drop-shadow-[0_10px_35px_rgba(34,197,94,0.55)] md:h-28 sm:h-[40px]"
          />
        </Link>

        {/* Espace réservé pour laisser la place au logo qui déborde */}
        <div className="w-32 flex-shrink-0 md:w-24 sm:w-12" />

        {/* LIENS CENTRÉS - Cachés sur mobile */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-1 text-sm font-medium text-gray-600">
          <Link href="/formations" className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:text-green-700">
            <i className="fas fa-graduation-cap text-blue-600" />
            Formations
          </Link>
          <Link href="/#missions" className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:text-green-700">
            <i className="fas fa-bullseye text-blue-600" />
            Mission
          </Link>
          <Link href="/admissions" className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:text-green-700">
            <i className="fas fa-file-signature text-blue-600" />
            Admissions
          </Link>
          <Link href="/#rdv" className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:text-green-700">
            <i className="fas fa-envelope text-blue-600" />
            Contact
          </Link>
        </nav>

        {/* ACTIONS DROITE */}
        <div className="flex flex-shrink-0 items-center gap-3">
          <div className="relative flex items-center">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-all duration-300 hover:scale-110 hover:bg-green-50 hover:text-green-700"
            >
              <i className="fas fa-search text-sm" />
            </button>
            {isSearchOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-full bg-white shadow-lg border border-gray-200 px-4 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <input
                  type="text"
                  placeholder="Rechercher une formation..."
                  className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 outline-none"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              </div>
            )}
          </div>

          <button
            onClick={onNotificationClick}
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-all duration-300 hover:scale-110 hover:bg-green-50 hover:text-green-700"
          >
            <i className="fas fa-bell text-sm" />
            {notificationCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-[0_2px_8px_rgba(37,99,235,0.4)]">
                {notificationCount}
              </span>
            )}
          </button>

          <span className="h-7 w-px bg-gray-200 hidden sm:block" />

          {/* BOUTON RÉSERVER UN RENDEZ-VOUS */}
          <Link
            href="/rendez-vous"
            className="hidden sm:flex h-9 items-center gap-2 rounded-full bg-blue-600 px-4 text-sm font-medium text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-105 hover:bg-green-500 hover:shadow-[0_4px_14px_rgba(34,197,94,0.4)]"
          >
            <i className="fas fa-calendar-check text-sm" />
            <span className="hidden sm:inline">Réserver un rendez-vous</span>
          </Link>
        </div>
      </header>

      {/* BARRE DE NAVIGATION MOBILE EN BAS - 10vh avec bordure radius 15px */}
      <nav className="fixed bottom-0 left-0 z-[999] w-full bg-white/95 backdrop-blur-xl border-t border-gray-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden rounded-t-[15px] overflow-hidden">
        <div className="flex items-center justify-around h-[10vh] min-h-[60px] max-h-[80px] px-2">
          <Link
            href="/"
            className="flex flex-col items-center gap-0.5 text-[10px] text-gray-500 transition-all duration-200 hover:text-green-600 active:scale-95"
          >
            <i className="fas fa-home text-base" />
            <span>Accueil</span>
          </Link>

          <Link
            href="/formations"
            className="flex flex-col items-center gap-0.5 text-[10px] text-gray-500 transition-all duration-200 hover:text-green-600 active:scale-95"
          >
            <i className="fas fa-graduation-cap text-base" />
            <span>Formations</span>
          </Link>

          <Link
            href="/admissions"
            className="flex flex-col items-center gap-0.5 text-[10px] text-gray-500 transition-all duration-200 hover:text-green-600 active:scale-95"
          >
            <i className="fas fa-file-signature text-base" />
            <span>Admissions</span>
          </Link>

          <Link
            href="/#rdv"
            className="flex flex-col items-center gap-0.5 text-[10px] text-gray-500 transition-all duration-200 hover:text-green-600 active:scale-95"
          >
            <i className="fas fa-envelope text-base" />
            <span>Contact</span>
          </Link>

          <Link
            href="/rendez-vous"
            className="flex flex-col items-center gap-0.5 text-[10px] text-green-600 transition-all duration-200 hover:text-green-700 active:scale-95"
          >
            <i className="fas fa-calendar-check text-base" />
            <span>RDV</span>
          </Link>
        </div>
      </nav>

      {/* ESPACE POUR ÉVITER QUE LE CONTENU SOIT CACHÉ PAR LA BARRE DU BAS */}
      <div className="h-[10vh] min-h-[60px] max-h-[80px] md:hidden" />
    </>
  );
}