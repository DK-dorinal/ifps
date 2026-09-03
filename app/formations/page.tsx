import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormationsContent from "@/components/FormationsContent";

export const metadata: Metadata = {
  title: "Formations | IFPSRI",
  description:
    "Découvrez nos filières en Santé, Restauration et Informatique — diplôme d'État en 12 mois, cours du jour et du soir.",
};

export default function Formations() {
  return (
    <>
      <Navbar />
      <FormationsContent />
      <Footer />
    </>
  );
}