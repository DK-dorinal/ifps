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
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsBookingOpen(false);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <>
      {/* MENU FLOATING */}
      <header
        className={`${comfortaa.className} fixed left-1/2 top-5 z-[1000] flex h-[15vh] max-h-[110px] min-h-[70px] w-[92%] max-w-[1200px] -translate-x-1/2 items-center justify-between rounded-full bg-[rgba(255,255,255,0.9)] backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-6 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] md:px-4 sm:w-[96%] sm:h-[12vh] sm:min-h-[60px]`}
      >
        {/* LOGO À GAUCHE, EN DÉBORDEMENT */}
        <Link
          href="/"
          className="absolute left-6 -top-8 z-10 flex-shrink-0 md:left-4 md:-top-6 sm:-top-4"
        >
          <img
            src="/logo.png"
            alt="IFPS Ngousso Logo"
            className="h-36 w-auto object-contain transition-all duration-500 ease-out hover:scale-105 drop-shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:drop-shadow-[0_10px_35px_rgba(34,197,94,0.55)] md:h-28 sm:h-20"
          />
        </Link>

        {/* Espace réservé pour laisser la place au logo qui déborde */}
        <div className="w-32 flex-shrink-0 md:w-24 sm:w-16" />

        {/* LIENS CENTRÉS AVEC ICÔNES + HOVER VERT */}
        <nav className="flex flex-1 items-center justify-center gap-1 text-sm font-medium text-gray-600">
          <Link href="#formations" className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:text-green-700">
            <i className="fas fa-graduation-cap text-blue-600" />
            Formations
          </Link>
          <Link href="#mission" className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:text-green-700">
            <i className="fas fa-bullseye text-blue-600" />
            Mission
          </Link>
          <Link href="#admissions" className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:text-green-700">
            <i className="fas fa-file-signature text-blue-600" />
            Admissions
          </Link>
          <Link href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-green-50 hover:text-green-700">
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
          <button
            onClick={() => setIsBookingOpen(true)}
            className="flex h-9 items-center gap-2 rounded-full bg-blue-600 px-4 text-sm font-medium text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-105 hover:bg-green-500 hover:shadow-[0_4px_14px_rgba(34,197,94,0.4)]"
          >
            <i className="fas fa-calendar-check text-sm" />
            <span className="hidden sm:inline">Réserver un rendez-vous</span>
          </button>
        </div>
      </header>

      {/* MODALE RÉSERVATION RENDEZ-VOUS (Indépendante du header car fixed) */}
      {isBookingOpen && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsBookingOpen(false);
          }}
        >
          <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            {/* ... Contenu de la modale inchangé ... */}
            <div className="relative bg-blue-600 px-6 pb-6 pt-7 text-white">
              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-200 hover:rotate-90 hover:bg-red-500"
              >
                <i className="fas fa-times text-sm" />
              </button>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                <i className="fas fa-calendar-check text-xl" />
              </div>
              <h3 className={`${comfortaa.className} mt-3 text-xl font-bold`}>
                Réserver un rendez-vous
              </h3>
              <p className="mt-1 text-sm text-blue-100">
                Notre support client vous recontactera pour confirmer.
              </p>
            </div>

            {/* Corps de la modale */}
            <div className="px-6 py-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center gap-3 py-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_8px_20px_rgba(34,197,94,0.35)]">
                    <i className="fas fa-check text-2xl" />
                  </div>
                  <p className="text-center text-sm font-medium text-gray-700">
                    Votre demande a bien été envoyée. Notre support client vous contactera bientôt.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="flex flex-col gap-4">
                  {/* ... Le reste du formulaire ... */}
                  <div>
                    <label htmlFor="nom" className="mb-1.5 block text-xs font-semibold text-gray-600">
                      Nom complet
                    </label>
                    <div className="relative">
                      <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-sm text-blue-500" />
                      <input
                        id="nom"
                        type="text"
                        required
                        placeholder="Ex: Jean Mballa"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                  {/* ... Le reste des champs (Lieu, Email, Tel, Age, Filière) ... */}
                  <div>
                    <label htmlFor="lieu" className="mb-1.5 block text-xs font-semibold text-gray-600">
                      Lieu de résidence
                    </label>
                    <div className="relative">
                      <i className="fas fa-map-marker-alt absolute left-4 top-1/2 -translate-y-1/2 text-sm text-blue-500" />
                      <input
                        id="lieu"
                        type="text"
                        required
                        placeholder="Ex: Ngousso, Yaoundé"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-gray-600">
                      Adresse email
                    </label>
                    <div className="relative">
                      <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-sm text-blue-500" />
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="exemple@email.com"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label htmlFor="telephone" className="mb-1.5 block text-xs font-semibold text-gray-600">
                        Téléphone
                      </label>
                      <div className="relative">
                        <i className="fas fa-phone absolute left-4 top-1/2 -translate-y-1/2 text-sm text-blue-500" />
                        <input
                          id="telephone"
                          type="tel"
                          required
                          placeholder="6XX XX XX XX"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                    </div>
                    <div className="w-28">
                      <label htmlFor="age" className="mb-1.5 block text-xs font-semibold text-gray-600">
                        Âge
                      </label>
                      <div className="relative">
                        <i className="fas fa-birthday-cake absolute left-4 top-1/2 -translate-y-1/2 text-sm text-blue-500" />
                        <input
                          id="age"
                          type="number"
                          min={15}
                          max={80}
                          required
                          placeholder="20"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-3 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="filiere" className="mb-1.5 block text-xs font-semibold text-gray-600">
                      Filière souhaitée
                    </label>
                    <div className="relative">
                      <i className="fas fa-graduation-cap absolute left-4 top-1/2 -translate-y-1/2 text-sm text-blue-500" />
                      <input
                        id="filiere"
                        type="text"
                        required
                        placeholder="Ex: Infirmier Diplômé d'État"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-[1.02] hover:bg-green-500 hover:shadow-[0_4px_14px_rgba(34,197,94,0.4)]"
                  >
                    Confirmer la demande
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}