import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminNotificationsContent from "@/components/AdminNotificationsContent";

export const metadata: Metadata = {
  title: "Notifications | Admin IFPSRI",
};

export default function AdminNotificationsPage() {
  return (
    <>
      <Navbar />
      <AdminNotificationsContent />
      <Footer />
    </>
  );
}