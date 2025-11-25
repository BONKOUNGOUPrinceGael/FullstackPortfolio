import { Resend } from "resend";

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? "repl " + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
      ? "depl " + process.env.WEB_REPL_RENEWAL
      : null;

  if (!xReplitToken) {
    throw new Error("X_REPLIT_TOKEN not found for repl/depl");
  }

  connectionSettings = await fetch(
    "https://" +
      hostname +
      "/api/v2/connection?include_secrets=true&connector_names=resend",
    {
      headers: {
        Accept: "application/json",
        X_REPLIT_TOKEN: xReplitToken,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data.items?.[0]);

  if (!connectionSettings || !connectionSettings.settings.api_key) {
    throw new Error("Resend not connected");
  }
  return {
    apiKey: connectionSettings.settings.api_key,
    fromEmail: connectionSettings.settings.from_email,
  };
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
// Always call this function again to get a fresh client.
export async function getUncachableResendClient() {
  const { apiKey, fromEmail } = await getCredentials();
  return {
    client: new Resend(apiKey),
    fromEmail,
  };
}

export async function sendContactEmail(
  fromEmail: string,
  fromName: string,
  subject: string,
  message: string,
  replyTo: string
) {
  const { client, fromEmail: senderEmail } = await getUncachableResendClient();

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; margin-bottom: 20px;">Nouveau message de contact</h2>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <p style="margin: 0 0 10px 0;"><strong>De:</strong> ${fromName} (${replyTo})</p>
        <p style="margin: 0 0 10px 0;"><strong>Sujet:</strong> ${subject}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;" />
        <p style="margin: 0; color: #555; line-height: 1.6;">${message.replace(
          /\n/g,
          "<br />"
        )}</p>
      </div>
      <p style="color: #999; font-size: 12px;">
        Ce message a été envoyé via le formulaire de contact du portfolio.
      </p>
    </div>
  `;

  const result = await client.emails.send({
    from: senderEmail,
    to: senderEmail,
    replyTo,
    subject: `[Nouveau Contact] ${subject}`,
    html: htmlContent,
  });

  return result;
}
