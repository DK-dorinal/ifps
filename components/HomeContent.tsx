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
  Globe          
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
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    color: "bg-blue-900/80",
  },
  {
    id: 2,
    title: "Pôle Restauration",
    description: "Maîtrisez l'art de la cuisine internationale, de la pâtisserie et du management hôtelier. Cours du jour et du soir disponibles.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    color: "bg-green-900/80",
  },
  {
    id: 3,
    title: "Pôle Informatique",
    description: "Devenez expert en Infographie, Secrétariat bureautique ou Comptabilité. Certification internationale et opportunités au Canada, en Europe et aux USA.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    color: "bg-indigo-900/80",
  },
];

// --- Données des Pôles ---
const poles = [
  { icon: Stethoscope, title: "Département Santé", description: "Technicien Adjoint de laboratoire, Assistant en kinésithérapie, Aide-soignante, Vendeur en pharmacie...", bg: "bg-blue-50", iconColor: "text-blue-700" },
  { icon: ChefHat, title: "Département Restauration", description: "Sculpture sur légumes, Management en hôtellerie, Cuisine diététique, Pâtisserie...", bg: "bg-green-50", iconColor: "text-green-700" },
  { icon: MonitorSmartphone, title: "Département Informatique", description: "Infographie, Secrétariat bureautique, Secrétariat comptable, Contrôle de gestion Audit...", bg: "bg-indigo-50", iconColor: "text-indigo-700" },
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
      
      {/* ================= CARROUSEL HERO ================= */}
      <section className="relative h-screen min-h-[700px] overflow-hidden pt-[20vh] pb-[10vh] border-[2cm] border-gray-100 rounded-[15px]"> 
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-[2cm] transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-[15px]" />
            
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent rounded-[15px]"></div>

            <div className="absolute inset-0 flex items-end pb-[15vh]">
              <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`max-w-3xl p-10 rounded-[15px] backdrop-blur-xl bg-white/20 border border-white/40 shadow-2xl ${slide.color}`}
                >
                  <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-white text-xl md:text-2xl mb-10 leading-relaxed">
                    {slide.description}
                  </p>
                  <motion.a 
                    href="#rdv"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white text-blue-900 font-bold py-4 px-10 rounded-[15px] text-lg shadow-xl hover:bg-green-500 hover:text-white transition-colors"
                  >
                    <CalendarCheck size={24} />
                    Prendre Rendez-vous
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-[calc(2cm+2rem)] right-[calc(2cm+2rem)] z-10 flex gap-2">
          <button onClick={prevSlide} className="bg-white/20 backdrop-blur-md border border-white/50 p-3 rounded-[15px] text-white hover:bg-white hover:text-blue-900 transition">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} className="bg-white/20 backdrop-blur-md border border-white/50 p-3 rounded-[15px] text-white hover:bg-white hover:text-blue-900 transition">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="absolute bottom-[calc(2cm+3.5rem)] right-[calc(2cm+2rem)] flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-[15px] transition-all ${idx === currentSlide ? "bg-white w-8" : "bg-white/40 w-2.5"}`}
            />
          ))}
        </div>
      </section>

      {/* ================= SECTION MISSION & VISION (ROADMAP) ================= */}
      <section id="missions" className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Notre Roadmap vers votre Réussite</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
                    <p className="text-sm text-gray-600">{step.desc}</p>
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
                  <p className="text-gray-600">{item.desc}</p>
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
            {poles.map((pole, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className={`p-10 ${pole.bg} flex justify-center`}>
                  <div className="p-4 bg-white rounded-full shadow-md">
                    <pole.icon size={48} className={pole.iconColor} />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{pole.title}</h3>
                  <p className="text-gray-600 mb-6">{pole.description}</p>
                  <a href="#rdv" className="inline-block text-blue-700 font-bold hover:text-green-600 transition">Voir les filières →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BANNIERE APPEL A L'ACTION (TEXTE EN BAS, BOUTON DISCRET) ================= */}
      <section id="rdv" className="relative h-[500px] py-0 px-6 md:px-20 overflow-hidden">
        {/* Image de fond */}
        <img 
          src="/images/baniere.jpg" 
          alt="Bannière" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-between py-12">
          
          {/* TITRE EN HAUT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Prêt à lancer votre carrière ?
            </h2>
          </div>

          {/* TEXTE ET BOUTON EN BAS, SUR LA MÊME LIGNE */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <p className="text-gray-200 text-lg md:text-xl max-w-lg drop-shadow-md">
              Prenez rendez-vous avec nos conseillers pour constituer votre dossier d'admission.
            </p>
            
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-md border border-white/40 text-white font-medium py-3 px-8 rounded-full text-base shadow-lg hover:bg-green-500 hover:text-white transition-colors"
            >
              <span className="inline-flex items-center gap-2">
                <CalendarCheck size={20} />
                Prendre Rendez-vous
              </span>
            </motion.a>
          </div>

        </div>
      </section>

    </div>
  );
}