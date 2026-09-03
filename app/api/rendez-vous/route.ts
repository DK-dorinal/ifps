import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { nom, telephone, email, pole, date, message } = await req.json();

    if (!nom || !telephone || !pole) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Site IFPSRI" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email || undefined,
      subject: `Nouvelle demande de rendez-vous — ${nom}`,
      html: `
        <h2>Nouvelle demande de rendez-vous</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Email :</strong> ${email || "Non renseigné"}</p>
        <p><strong>Pôle souhaité :</strong> ${pole}</p>
        <p><strong>Date souhaitée :</strong> ${date || "Non précisée"}</p>
        <p><strong>Message :</strong><br/>${message || "Aucun"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email :", error);
    return NextResponse.json(
      { error: "Échec de l'envoi de l'email." },
      { status: 500 }
    );
  }
}