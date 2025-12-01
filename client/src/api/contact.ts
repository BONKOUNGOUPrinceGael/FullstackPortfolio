const API_URL = "/.netlify/functions/contact";

export async function sendContact(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Erreur ${res.status}: ${await res.text()}`);
  }

  return res.json();
}
