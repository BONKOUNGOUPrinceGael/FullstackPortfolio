import { randomUUID } from "crypto";
import { Resend } from "resend";

const contactMessages = new Map();

async function sendContactEmail(fromEmail, fromName, subject, message, replyTo) {
  const apiKey = process.env.RESEND_API_KEY;
  const client = new Resend(apiKey);

  await client.emails.send({
    from: fromEmail,
    to: "ton-email@example.com",
    subject: `[Nouveau Contact] ${subject}`,
    html: `
      <p>De: ${fromName} (${replyTo})</p>
      <p>Sujet: ${subject}</p>
      <p>${message}</p>
    `,
  });
}

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Méthode non autorisée" };
  }

  const body = JSON.parse(event.body);
  const id = randomUUID();
  const message = { id, ...body, createdAt: new Date() };
  contactMessages.set(id, message);

  try {
    await sendContactEmail(body.email, body.name, body.subject, body.message, body.email);
  } catch (err) {
    console.error("Erreur en envoyant l'email:", err);
    return { statusCode: 500, body: "Erreur serveur" };
  }

  return { statusCode: 201, body: JSON.stringify(message) };
}
