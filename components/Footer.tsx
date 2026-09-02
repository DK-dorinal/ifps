// components/Footer.tsx
"use client";

import Link from "next/link";
import { Comfortaa } from "next/font/google";
import { useState } from "react";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className={`${comfortaa.className} bg-gray-900 text-white mt-20`}>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        {/* Ligne supérieure: Logo à gauche, Newsletter à droite */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-gray-700 pb-8 md:flex-row">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="IFPS Ngousso"
              className="h-16 w-auto object-contain"
            />
            <div>
              <h3 className="text-xl font-bold text-white">IFPS Ngousso</h3>
              <p className="text-sm text-gray-400">Institut de Formation Paramédicale</p>
            </div>
          </div>

          <div className="flex w-full max-w-md items-center gap-4">
            <span className="text-sm font-medium text-gray-300 hidden md:block">
              <i className="fas fa-envelope mr-2 text-green-400" />
              Newsletter
            </span>
            <form onSubmit={handleSubmit} className="flex-1">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                  className="w-full rounded-lg bg-gray-800 px-4 py-3 pr-28 text-sm text-white placeholder:text-gray-500 outline-none transition-all focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 rounded-lg bg-green-500 px-5 py-2 text-sm font-medium transition-all hover:bg-green-400 hover:scale-105"
                >
                  {isSubscribed ? "✓" : "S'abonner"}
                </button>
              </div>
              {isSubscribed && (
                <p className="mt-1.5 text-xs text-green-400 animate-in fade-in duration-300">
                  ✓ Merci pour votre abonnement !
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Trois colonnes équilibrées */}
        <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-3">
          {/* Colonne 1: Description - Texte justifié */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              <span className="h-px w-8 bg-green-400 inline-block mr-2 align-middle" />
              À propos
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed text-justify">
              IFPS Ngousso est un institut de formation paramédicale de référence. 
              Nous formons des professionnels de santé compétents, éthiques et 
              engagés au service des populations. Notre approche pédagogique 
              allie théorie et pratique pour une insertion professionnelle réussie.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-all hover:scale-110">
                <i className="fab fa-facebook-f text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-all hover:scale-110">
                <i className="fab fa-twitter text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-all hover:scale-110">
                <i className="fab fa-linkedin-in text-lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-all hover:scale-110">
                <i className="fab fa-youtube text-lg" />
              </a>
            </div>
          </div>

          {/* Colonne 2: Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              <span className="h-px w-8 bg-green-400 inline-block mr-2 align-middle" />
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <i className="fas fa-map-marker-alt mt-0.5 text-green-400 w-5 text-center" />
                <span>Ngousso, Yaoundé - Cameroun</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <i className="fas fa-phone text-green-400 w-5 text-center" />
                <span>(+237) 6XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <i className="fas fa-envelope text-green-400 w-5 text-center" />
                <span>contact@ifps-ngousso.cm</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <i className="fas fa-clock text-green-400 w-5 text-center" />
                <span>Lun - Ven: 08:00 - 17:00</span>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Carte */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              <span className="h-px w-8 bg-green-400 inline-block mr-2 align-middle" />
              Nous trouver
            </h4>
            <div className="overflow-hidden rounded-xl shadow-lg shadow-black/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.779069833785!2d11.510694!3d3.866667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfc9f7e02e3f%3A0x6c8c5f8b5e8f5d3c!2sNgousso%2C%20Yaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Carte IFPS Ngousso"
              />
            </div>
            <p className="mt-2 text-xs text-gray-400 text-center">
              <i className="fas fa-location-dot text-green-400 mr-1" />
              Ngousso, Yaoundé - Cameroun
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <p>
            © {currentYear} IFPS Ngousso. Tous droits réservés.
            <span className="mx-3 text-gray-700">|</span>
            <Link href="#" className="hover:text-green-400 transition-colors">
              Mentions légales
            </Link>
            <span className="mx-3 text-gray-700">|</span>
            <Link href="#" className="hover:text-green-400 transition-colors">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}