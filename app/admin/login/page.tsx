import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminLoginContent from "@/components/AdminLoginContent";

export const metadata: Metadata = {
  title: "Connexion admin | IFPSRI",
};

export default function AdminLoginPage() {
  return (
    <>
      <Navbar />
      <AdminLoginContent />
      <Footer />
    </>
  );
}