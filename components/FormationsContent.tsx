"use client";

import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, ChefHat, MonitorSmartphone, Check, Eye, Download } from "lucide-react";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poles = [
  {
    id: "sante",
    icon: Stethoscope,
    nom: "Santé",
    accent: "#1F6F63",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    flyer: "/images/sante.jpg",
    description:
      "Formez-vous aux métiers du soin et de l'accompagnement, avec un suivi jusqu'au stage en entreprise.",
    filieres: [
      "Technicien Adjoint de laboratoire",
      "Assistant en kinésithérapie",
      "Auxiliaire de puériculture",
      "Assistant de maternité",
      "Auxiliaire de vie sociale",
      "Délégué médical",
      "Aide-soignante",
      "Vendeur en pharmacie",
    ],
  },
  {
    id: "restauration",
    icon: ChefHat,
    nom: "Restauration",
    accent: "#C9A227",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    flyer: "/images/resto.jpg",
    description:
      "De la cuisine internationale au management hôtelier, apprenez un métier recherché en établissement comme à l'international.",
    filieres: [
      "Sculpture sur légumes et fruits",
      "Management en hôtellerie",
      "Maître/maîtresse d'hôtel",
      "Cuisine internationale",
      "Cuisine diététique",
      "Hébergement",
      "Pâtisserie",
    ],
  },
  {
    id: "informatique",
    icon: MonitorSmartphone,
    nom: "Informatique",
    accent: "#12232E",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    flyer: "/images/info.jpg",
    description:
      "Maîtrisez les outils bureautiques, comptables et graphiques recherchés par les entreprises et administrations.",
    filieres: [
      "Infographie",
      "Secrétariat bureautique",
      "Secrétariat comptable",
      "Contrôle de gestion Audit",
    ],
  },
];

export default function FormationsContent() {
  return (
    <div className={`${comfortaa.className} bg-[#FAF8F3] text-[#12232E]`}>

      {/* ================= HERO ================= */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 pt-20 pb-16 text-center">
        <p className="text-[#C9A227] font-semibold mb-4">Nos formations</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Trois pôles, un même objectif : votre diplôme d'État
        </h1>
        <p className="text-[#12232E]/70 text-lg leading-relaxed max-w-2xl mx-auto">
          Cours du jour et du soir, sur 12 mois, avec un accompagnement personnalisé
          jusqu'à l'insertion professionnelle.
        </p>
      </section>

      {/* ================= POLES (alternés) ================= */}
      {poles.map((pole, idx) => (
        <section
          key={pole.id}
          id={pole.id}
          className={`max-w-6xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
            idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={pole.image}
              alt={pole.nom}
              className="w-full h-[340px] object-cover rounded-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: `${pole.accent}1A`, color: pole.accent }}
            >
              <pole.icon size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{pole.nom}</h2>
            <p className="text-[#12232E]/70 leading-relaxed mb-6 max-w-md">
              {pole.description}
            </p>
            <ul className="space-y-3 mb-8">
              {pole.filieres.map((filiere) => (
                <li key={filiere} className="flex items-start gap-3">
                  <Check size={18} className="mt-1 flex-shrink-0" style={{ color: pole.accent }} />
                  <span className="text-[#12232E]/80">{filiere}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href={pole.flyer}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold py-3 px-6 rounded-md border transition-colors"
                style={{ borderColor: pole.accent, color: pole.accent }}
              >
                <Eye size={18} />
                Voir le dépliant
              </a>
              <a
                href={pole.flyer}
                download
                className="inline-flex items-center gap-2 text-white font-semibold py-3 px-6 rounded-md transition-colors"
                style={{ backgroundColor: pole.accent }}
              >
                <Download size={18} />
                Télécharger le dépliant
              </a>
            </div>
          </motion.div>
        </section>
      ))}

      {/* ================= CTA ================= */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-center border-t border-[#12232E]/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Prêt à choisir votre filière ?</h2>
        <p className="text-[#12232E]/70 mb-8 max-w-lg mx-auto">
          Consultez les conditions d'admission et téléchargez votre fiche d'inscription.
        </p>
        <a
        
          href="/admissions"
          className="inline-flex items-center gap-3 bg-[#12232E] text-[#FAF8F3] font-semibold py-4 px-8 rounded-md hover:bg-[#C9A227] hover:text-[#12232E] transition-colors"
        >
          Voir les admissions
        </a>
      </section>

    </div>
  );
}