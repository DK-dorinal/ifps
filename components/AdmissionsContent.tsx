"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Check, Phone, Mail, MapPin } from "lucide-react";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dossierItems = [
  "Photocopie certifiée de l'acte de naissance",
  "Photocopie du dernier diplôme obtenu",
  "Photocopie de la carte d'identité ou du passeport",
  "04 photos d'identité 4x4",
  "Fiche d'inscription (à retirer à la direction)",
  "Une rame de papier A4",
];

const etapes = [
  {
    numero: "1",
    titre: "Télécharger la fiche",
    texte: "Récupérez la fiche d'inscription ci-dessus ou directement à la direction.",
  },
  {
    numero: "2",
    titre: "Constituer le dossier",
    texte: "Rassemblez les pièces demandées et remplissez la fiche d'inscription.",
  },
  {
    numero: "3",
    titre: "Déposer le dossier",
    texte: "Apportez votre dossier complet au secrétariat, Dernier Poteau, Éleveur.",
  },
  {
    numero: "4",
    titre: "Régler les frais",
    texte: "Frais d'inscription de 15 000 FCFA, puis frais de scolarité de 250 000 FCFA.",
  },
  {
    numero: "5",
    titre: "Démarrer la formation",
    texte: "Intégrez votre pôle (Santé, Restauration ou Informatique) dès la rentrée.",
  },
];

const niveaux = ["3ème", "BEPC", "Probatoire", "Baccalauréat", "Licence"];

export default function AdmissionsContent() {
  return (
    <div className={`${comfortaa.className} bg-[#FAF8F3] text-[#12232E]`}>

      {/* ================= HERO SPLIT ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#C9A227] font-semibold mb-4">Admissions IFPSRI</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Cinq étapes vous séparent de votre diplôme d'État
          </h1>
          <p className="text-[#12232E]/70 text-lg leading-relaxed mb-10 max-w-md">
            Santé, restauration ou informatique : commencez par télécharger
            votre fiche d'inscription et suivez le parcours ci-dessous.
          </p>
          <a 
            href="/images/dossier.jpg"
            download
            className="inline-flex items-center gap-3 bg-[#12232E] text-[#FAF8F3] font-semibold py-4 px-8 rounded-md hover:bg-[#C9A227] hover:text-[#12232E] transition-colors"
          >
            <Download size={20} />
            Télécharger la fiche d'inscription
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <img
            src="images/admis.jpg"
            alt="Étudiante IFPSRI"
            className="w-full h-[420px] object-cover rounded-md"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-md shadow-md px-6 py-4 border border-[#12232E]/10">
            <p className="text-2xl font-bold text-[#12232E]">12 mois</p>
            <p className="text-sm text-[#12232E]/60">jusqu'au diplôme d'État</p>
          </div>
        </motion.div>
      </section>

      {/* ================= ROADMAP DU PARCOURS D'INSCRIPTION ================= */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Le parcours d'inscription</h2>
        <div className="relative pl-10 border-l-2 border-[#12232E]/15 space-y-12">
          {etapes.map((etape) => (
            <div key={etape.numero} className="relative">
              <span className="absolute -left-[3.15rem] top-0 w-9 h-9 rounded-full bg-[#12232E] text-[#FAF8F3] text-sm font-bold flex items-center justify-center">
                {etape.numero}
              </span>
              <h3 className="font-bold text-lg mb-1">{etape.titre}</h3>
              <p className="text-[#12232E]/70 leading-relaxed max-w-lg">{etape.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NIVEAUX REQUIS ================= */}
      <section className="bg-[#12232E] text-[#FAF8F3] py-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Niveaux requis</h2>
          <p className="text-[#FAF8F3]/70 mb-8 max-w-lg">
            Accessible dès la classe de 3ème et jusqu'à la Licence.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-lg font-medium">
            {niveaux.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPOSITION DU DOSSIER ================= */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Composition du dossier</h2>
        <ul className="space-y-4">
          {dossierItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check size={20} className="text-[#C9A227] mt-1 flex-shrink-0" />
              <span className="text-[#12232E]/80">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= FRAIS ================= */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 border-t border-[#12232E]/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Frais</h2>
        <div className="divide-y divide-[#12232E]/10">
          <div className="flex justify-between items-center py-4">
            <span className="text-[#12232E]/80">Frais d'inscription</span>
            <span className="text-xl font-bold">15 000 FCFA</span>
          </div>
          <div className="flex justify-between items-center py-4">
            <span className="text-[#12232E]/80">Frais de scolarité</span>
            <span className="text-xl font-bold">250 000 FCFA</span>
          </div>
        </div>
        <p className="mt-6 text-sm text-[#C9A227] font-medium">
          Réduction de 30% pour les 15 premiers étudiants inscrits.
        </p>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 border-t border-[#12232E]/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Nous contacter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#12232E]/80">
          <div className="flex items-start gap-3">
            <Phone size={20} className="mt-1 text-[#C9A227]" />
            <div>
              <a href="tel:+237654452331" className="block hover:text-[#12232E]">654 452 331</a>
              <a href="tel:+237695178395" className="block hover:text-[#12232E]">695 178 395</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail size={20} className="mt-1 text-[#C9A227]" />
            <a href="mailto:IFPSRI@gmail.com" className="hover:text-[#12232E]">IFPSRI@gmail.com</a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={20} className="mt-1 text-[#C9A227]" />
            <span>Dernier Poteau, Éleveur, entrée Bonne Semence</span>
          </div>
        </div>
      </section>

    </div>
  );
}