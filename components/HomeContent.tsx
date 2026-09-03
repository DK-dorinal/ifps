"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  ChefHat,
  MonitorSmartphone,
  Target,
  Eye,
  CalendarCheck,
  UserPlus,
  BookOpen,
  Briefcase,
  LifeBuoy,
  TrendingUp,
  Globe,
  Phone
} from "lucide-react";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// --- Données des slides du carrousel ---
const slides = [
  {
    id: 1,
    title: "Pôle Santé",
    description: "Devenez Aide-soignant, Assistant de laboratoire ou Auxiliaire de puériculture. Une formation intensive de 12 mois pour un diplôme d'État reconnu.",
    image: "images/sante.jpg",
    color: "bg-blue-900/80",
  },
  {
    id: 2,
    title: "Pôle Restauration",
    description: "Maîtrisez l'art de la cuisine internationale, de la pâtisserie et du management hôtelier. Cours du jour et du soir disponibles.",
    image: "/images/resto.jpg",
    color: "bg-green-900/80",
  },
  {
    id: 3,
    title: "Pôle Informatique",
    description: "Devenez expert en Infographie, Secrétariat bureautique ou Comptabilité. Certification internationale et opportunités au Canada, en Europe et aux USA.",
    image: "/images/info.jpg",
    color: "bg-indigo-900/80",
  },
];

export default function HomeContent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className={`${comfortaa.className} min-h-screen bg-gray-50`}>

      {/* ================= CARROUSEL HERO - SANS MARGES SUR MOBILE ================= */}
      <section id="hero" className="relative h-screen min-h-[700px] overflow-hidden pt-[20vh] pb-[10vh] border-0 md:border-[2cm] border-gray-100 rounded-none md:rounded-[15px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 md:inset-[2cm] transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-none md:rounded-[15px]" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent rounded-none md:rounded-[15px]"></div>

            <div className="absolute inset-0 flex items-end pb-[15vh]">
              <div className="max-w-7xl mx-auto px-4 md:px-10 w-full">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`max-w-3xl p-6 md:p-10 rounded-none md:rounded-[15px] backdrop-blur-xl bg-white/20 border border-white/40 shadow-2xl ${slide.color}`}
                >
                  <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 md:mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-white text-base md:text-2xl mb-6 md:mb-10 leading-relaxed text-justify">
                    {slide.description}
                  </p>
                  <motion.a
                    href="/#rdv"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white text-blue-900 font-bold py-3 md:py-4 px-6 md:px-10 rounded-[15px] text-sm md:text-lg shadow-xl hover:bg-green-500 hover:text-white transition-colors"
                  >
                    <CalendarCheck size={20} className="md:w-6 md:h-6" />
                    Prendre Rendez-vous
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        ))}

        {/* Boutons de navigation - repositionnés sur mobile */}
        <div className="absolute bottom-[calc(2rem)] right-4 md:right-[calc(2cm+2rem)] z-10 flex gap-2">
          <button onClick={prevSlide} className="bg-white/20 backdrop-blur-md border border-white/50 p-2 md:p-3 rounded-[15px] text-white hover:bg-white hover:text-blue-900 transition">
            <ChevronLeft size={16} className="md:w-5 md:h-5" />
          </button>
          <button onClick={nextSlide} className="bg-white/20 backdrop-blur-md border border-white/50 p-2 md:p-3 rounded-[15px] text-white hover:bg-white hover:text-blue-900 transition">
            <ChevronRight size={16} className="md:w-5 md:h-5" />
          </button>
        </div>

        {/* Indicateurs de slides - repositionnés sur mobile */}
        <div className="absolute bottom-[calc(3.5rem)] right-4 md:bottom-[calc(2cm+3.5rem)] md:right-[calc(2cm+2rem)] flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-[15px] transition-all ${idx === currentSlide ? "bg-white w-6 md:w-8" : "bg-white/40 w-2"}`}
            />
          ))}
        </div>
      </section>

      {/* ================= SECTION MISSION & VISION (ROADMAP) ================= */}
      <section id="missions" className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Notre Roadmap vers votre Réussite</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              Un accompagnement structuré de l'inscription à l'emploi pour garantir votre avenir professionnel.
            </p>
          </div>

          {/* ROADMAP MISSION */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-blue-800 mb-10 flex items-center gap-3">
              <Target size={32} className="text-blue-600" /> Notre Mission : Votre parcours
            </h3>

            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                {[
                  { icon: UserPlus, title: "Inscription", desc: "Déposez votre dossier et validez votre admission.", color: "bg-blue-100 text-blue-700" },
                  { icon: BookOpen, title: "Formation", desc: "Apprenez les compétences métiers avec des experts (12 mois).", color: "bg-green-100 text-green-700" },
                  { icon: Briefcase, title: "Stage", desc: "Mettez en pratique vos acquis en entreprise.", color: "bg-indigo-100 text-indigo-700" },
                  { icon: LifeBuoy, title: "Soutien", desc: "Accompagnement personnalisé vers l'insertion professionnelle.", color: "bg-amber-100 text-amber-700" },
                  { icon: TrendingUp, title: "Emploi < 6 mois", desc: "Trouvez un travail rapidement grâce à notre réseau.", color: "bg-emerald-100 text-emerald-700" },
                ].map((step, idx) => (
                  <div key={idx} className="relative flex flex-col items-center text-center group">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${step.color} shadow-lg mb-4 border-4 border-white group-hover:scale-110 transition-transform`}>
                      <step.icon size={32} />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 mt-10">{step.title}</h4>
                    <p className="text-sm text-gray-600 text-justify">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VISION */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-green-800 mb-10 flex items-center gap-3">
              <Eye size={32} className="text-green-600" /> Notre Vision : Une ambition mondiale
            </h3>

            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="font-semibold text-gray-800 flex items-center gap-2">
                    <Globe size={20} className="text-green-600" /> Ancrer notre excellence au Cameroun
                  </p>
                  <span className="text-sm font-bold text-green-700">100%</span>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-green-600 rounded-full"
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="font-semibold text-gray-800 flex items-center gap-2">
                    <Globe size={20} className="text-blue-600" /> Rayonner en Afrique Centrale
                  </p>
                  <span className="text-sm font-bold text-blue-700">75%</span>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-blue-600 rounded-full"
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="font-semibold text-gray-800 flex items-center gap-2">
                    <Globe size={20} className="text-amber-600" /> Opportunités au Canada, Europe & USA
                  </p>
                  <span className="text-sm font-bold text-amber-700">50%</span>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-amber-500 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION POURQUOI NOUS CHOISIR ================= */}
      <section id="apropos" className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Pourquoi nous choisir ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Diplôme en 12 mois",
                desc: "Obtenez votre diplôme d'État en seulement 1 an, cours de jour et du soir.",
                color: "border-t-4 border-green-600",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Carrière Internationale",
                desc: "Accompagnement pour travailler au Canada, en Europe ou aux États-Unis (DQP, CQP).",
                color: "border-t-4 border-blue-600",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Niveaux Accessibles",
                desc: "Ouvert aux niveaux 3ème, BEPC, Probatoire, Baccalauréat et Licence.",
                color: "border-t-4 border-indigo-600",
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
            ].map((item, idx) => (
              <div key={idx} className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow ${item.color}`}>
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-justify">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION NOS POLES ================= */}
      <section id="formations" className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Nos Pôles de Formation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Département Santé",
                description: "Technicien Adjoint de laboratoire, Assistant en kinésithérapie, Aide-soignante, Vendeur en pharmacie...",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                link: "/admissions"
              },
              {
                title: "Département Restauration",
                description: "Sculpture sur légumes, Management en hôtellerie, Cuisine diététique, Pâtisserie...",
                image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                link: "/admissions"
              },
              {
                title: "Département Informatique",
                description: "Infographie, Secrétariat bureautique, Secrétariat comptable, Contrôle de gestion Audit...",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                link: "/admissions"
              },
            ].map((pole, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pole.image}
                    alt={pole.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay léger */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {/* Titre sur l'image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {pole.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 text-justify">
                    {pole.description}
                  </p>

                  {/* Bouton discret */}
                  <motion.a
                    href={pole.link}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-blue-700 font-medium text-sm hover:text-green-600 transition-colors group/link"
                  >
                    Voir les filières
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BANNIERE AVEC NUMEROS EN BAS A DROITE ================= */}
      <section id="rdv" className="relative w-full overflow-hidden">
        {/* Image de fond en pleine largeur */}
        <img
          src="/images/baniere.jpg"
          alt="Bannière"
          className="w-full h-auto object-cover"
        />

        {/* Overlay pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* Conteneur des numéros en bas à droite */}
        <div className="absolute bottom-0 right-0 z-10 w-[35%] max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/70 backdrop-blur-md border border-white/20 rounded-t-[15px] shadow-xl flex items-center justify-between p-2 transition-all duration-300"
          >
            <motion.a
              href="tel:+237654452331"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(34, 197, 94, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.02, 1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-white font-medium py-3 px-4 rounded-full text-base transition-all duration-300 flex items-center justify-center gap-3 flex-1 hover:text-white relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Phone size={18} className="flex-shrink-0" />
              </motion.div>
              <span className="whitespace-nowrap">654 452 331</span>

              {/* Effet de pulsation au survol */}
              <motion.div
                className="absolute inset-0 rounded-full bg-green-500/0"
                whileHover={{
                  backgroundColor: "rgba(34, 197, 94, 0.2)",
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <span className="w-px h-8 bg-white/30 flex-shrink-0"></span>

            <motion.a
              href="tel:+237695178395"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(34, 197, 94, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.02, 1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="text-white font-medium py-3 px-4 rounded-full text-base transition-all duration-300 flex items-center justify-center gap-3 flex-1 hover:text-white relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <Phone size={18} className="flex-shrink-0" />
              </motion.div>
              <span className="whitespace-nowrap">695 178 395</span>

              {/* Effet de pulsation au survol */}
              <motion.div
                className="absolute inset-0 rounded-full bg-green-500/0"
                whileHover={{
                  backgroundColor: "rgba(34, 197, 94, 0.2)",
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}