import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RendezVousContent from "@/components/RendezVousContent";

export const metadata: Metadata = {
  title: "Prendre rendez-vous | IFPSRI",
  description:
    "Prenez rendez-vous avec l'IFPSRI pour discuter de votre inscription et choisir votre filière.",
};

export default function RendezVous() {
  return (
    <>
      <Navbar />
      <RendezVousContent />
      <Footer />
    </>
  );
}