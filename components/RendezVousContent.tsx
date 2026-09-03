"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CalendarCheck, Check } from "lucide-react";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poles = ["Santé", "Restauration", "Informatique"];

export default function RendezVousContent() {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    pole: "",
    date: "",
    message: "",
  });
  const [envoye, setEnvoye] = useState(false);
  const [envoi, setEnvoi] = useState(false);
  const [erreur, setErreur] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErreur("");
    setEnvoi(true);
    try {
      const res = await fetch("/api/rendez-vous", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setEnvoye(true);
    } catch {
      setErreur("Une erreur est survenue. Réessayez ou appelez-nous directement.");
    } finally {
      setEnvoi(false);
    }
  }

  return (
    <div className={`${comfortaa.className} bg-[#FAF8F3] text-[#12232E]`}>

      {/* ================= HERO ================= */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 pt-20 pb-12 text-center">
        <p className="text-[#C9A227] font-semibold mb-4">Prendre rendez-vous</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Parlons de votre projet de formation
        </h1>
        <p className="text-[#12232E]/70 text-lg leading-relaxed max-w-2xl mx-auto">
          Remplissez le formulaire ci-dessous, notre équipe vous recontacte pour
          fixer un créneau au secrétariat.
        </p>
      </section>

      {/* ================= FORMULAIRE + INFOS ================= */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          {envoye ? (
            <div className="bg-white border border-[#12232E]/10 rounded-md p-10 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#1F6F63]/10 text-[#1F6F63] flex items-center justify-center mb-4">
                <Check size={28} />
              </div>
              <h2 className="text-xl font-bold mb-2">Demande envoyée</h2>
              <p className="text-[#12232E]/70">
                Merci {form.nom || ""}, notre équipe vous recontacte très vite au{" "}
                {form.telephone || "numéro indiqué"}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="block font-medium mb-2">
                  Nom complet
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  value={form.nom}
                  onChange={handleChange}
                  placeholder="Votre nom et prénom"
                  className="w-full border border-[#12232E]/20 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telephone" className="block font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    required
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="6XX XXX XXX"
                    className="w-full border border-[#12232E]/20 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium mb-2">
                    Email (optionnel)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="vous@exemple.com"
                    className="w-full border border-[#12232E]/20 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pole" className="block font-medium mb-2">
                    Pôle souhaité
                  </label>
                  <select
                    id="pole"
                    name="pole"
                    required
                    value={form.pole}
                    onChange={handleChange}
                    className="w-full border border-[#12232E]/20 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                  >
                    <option value="" disabled>
                      Choisir un pôle
                    </option>
                    {poles.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block font-medium mb-2">
                    Date souhaitée
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full border border-[#12232E]/20 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Précisez votre demande, votre niveau d'étude, etc."
                  className="w-full border border-[#12232E]/20 rounded-md px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227] resize-none"
                />
              </div>

              {erreur && (
                <p className="text-red-600 text-sm">{erreur}</p>
              )}

              <button
                type="submit"
                disabled={envoi}
                className="inline-flex items-center gap-3 bg-[#12232E] text-[#FAF8F3] font-semibold py-4 px-8 rounded-md hover:bg-[#C9A227] hover:text-[#12232E] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <CalendarCheck size={20} />
                {envoi ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
            </form>
          )}
        </motion.div>

        {/* Infos de contact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2 bg-[#12232E] text-[#FAF8F3] rounded-md p-8 h-fit"
        >
          <h2 className="text-xl font-bold mb-6">Ou contactez-nous directement</h2>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <Phone size={20} className="mt-1 text-[#C9A227]" />
              <div>
                <a href="tel:+237654452331" className="block hover:text-[#C9A227]">654 452 331</a>
                <a href="tel:+237695178395" className="block hover:text-[#C9A227]">695 178 395</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={20} className="mt-1 text-[#C9A227]" />
              <a href="mailto:IFPSRI@gmail.com" className="hover:text-[#C9A227]">
                IFPSRI@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-1 text-[#C9A227]" />
              <span>Dernier Poteau, Éleveur, entrée Bonne Semence</span>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}