import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdmissionsContent from "@/components/AdmissionsContent";

export const metadata: Metadata = {
  title: "Admissions | IFPSRI",
  description:
    "Découvrez comment vous inscrire à l'IFPSRI : niveaux requis, composition du dossier, frais et parcours d'inscription en 5 étapes.",
};

export default function Admissions() {
  return (
    <>
      <Navbar />
      <AdmissionsContent />
      <Footer />
    </>
  );
}