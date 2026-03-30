// ── Stripe webhook signature verification ────────────────────────
async function verifyStripeSignature(body, sigHeader, secret) {
  const parts = Object.fromEntries(sigHeader.split(",").map(p => p.split("=")));
  const payload = `${parts.t}.${body}`;
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  const expected = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, "0")).join("");
  return expected === parts.v1;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const STRIPE_KEY = env.STRIPE_API_KEY;
    const stripeHeaders = { Authorization: `Bearer ${STRIPE_KEY}` };

    // ── /api/webhook — Stripe purchase event ─────────────────────
    if (url.pathname === "/api/webhook" && request.method === "POST") {
      const body = await request.text();
      const sig = request.headers.get("stripe-signature");

      // Verify signature
      const valid = await verifyStripeSignature(body, sig, env.STRIPE_WEBHOOK_SECRET);
      if (!valid) return new Response("Invalid signature", { status: 400 });

      const event = JSON.parse(body);
      if (event.type !== "checkout.session.completed") return new Response("OK");

      const session = event.data.object;
      if (session.payment_status !== "paid") return new Response("OK");

      const buyerEmail = session.customer_details?.email;
      const buyerName = session.customer_details?.name?.split(" ")[0] || "there";
      if (!buyerEmail) return new Response("No email", { status: 400 });

      // Fetch PDF and encode as base64
      const pdfRes = await fetch("https://jackmini.com/dl/guide-v1-d3b34af56a71.pdf");
      const pdfBuffer = await pdfRes.arrayBuffer();
      const pdfBase64 = btoa(String.fromCharCode(...new Uint8Array(pdfBuffer)));

      // Send via Resend
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Jack Mini <jack@jackmini.com>",
          to: buyerEmail,
          subject: "Your guide — How to Run a Business With an AI Agent",
          html: `<p>Hi ${buyerName},</p>
<p>Thanks for buying. Your guide is attached — the full 12-chapter playbook.</p>
<p>If you have questions, find me at <a href="https://x.com/JackMiniAI">@JackMiniAI</a> on X.</p>
<p>— Jack Mini</p>`,
          attachments: [{
            filename: "How-to-Run-a-Business-With-an-AI-Agent.pdf",
            content: pdfBase64,
          }],
        }),
      });

      if (!emailRes.ok) {
        const err = await emailRes.text();
        console.error("Resend error:", err);
        return new Response("Email failed", { status: 500 });
      }

      return new Response("OK");
    }

    // ── /api/stats — live revenue ─────────────────────────────────
    if (url.pathname === "/api/stats") {
      if (!STRIPE_KEY) return Response.json({ error: "Missing key" }, { status: 500 });
      try {
        const charges = [];
        let nextUrl = "https://api.stripe.com/v1/charges?limit=100";
        while (nextUrl && charges.length < 500) {
          const res = await fetch(nextUrl, { headers: stripeHeaders });
          const data = await res.json();
          if (data.error) throw new Error(data.error.message);
          for (const c of data.data) {
            if (c.paid && !c.refunded && c.status === "succeeded") charges.push(c);
          }
          nextUrl = data.has_more
            ? `https://api.stripe.com/v1/charges?limit=100&starting_after=${data.data[data.data.length - 1].id}`
            : null;
        }
        const now = Math.floor(Date.now() / 1000);
        const day7 = now - 7 * 86400;
        const day30 = now - 30 * 86400;
        const sum = (since) =>
          charges.filter((c) => c.created >= since).reduce((a, c) => a + c.amount, 0) / 100;
        return Response.json({
          updated: new Date().toISOString(),
          revenue: { "7d": sum(day7), "30d": sum(day30), lifetime: charges.reduce((a, c) => a + c.amount, 0) / 100 },
          sales: { total: charges.length, "7d": charges.filter(c => c.created >= day7).length, "30d": charges.filter(c => c.created >= day30).length },
        }, { headers: { "Cache-Control": "s-maxage=300", "Access-Control-Allow-Origin": "*" } });
      } catch (e) {
        return Response.json({ error: e.message }, { status: 500 });
      }
    }

    // ── /download — validate Stripe session, serve download ───────
    if (url.pathname === "/download") {
      const sessionId = url.searchParams.get("session_id");
      if (!sessionId) return new Response("Missing session.", { status: 400 });
      if (!STRIPE_KEY) return new Response("Config error.", { status: 500 });

      const res = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, { headers: stripeHeaders });
      const session = await res.json();
      if (session.error || session.payment_status !== "paid") {
        return new Response("Payment not verified. If you just purchased, wait a moment and refresh.", { status: 402 });
      }

      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Download — How to Run a Business With an AI Agent</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#0a0a0a;color:#F5F5F5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
         display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px}
    .card{background:#111;border:1px solid #222;border-radius:12px;padding:48px 40px;max-width:480px;width:100%;text-align:center}
    .check{font-size:48px;margin-bottom:24px}
    h1{font-size:22px;font-weight:700;margin-bottom:12px}
    p{color:#888;font-size:15px;line-height:1.6;margin-bottom:32px}
    .btn{display:inline-block;background:#00D4FF;color:#0a0a0a;font-size:15px;font-weight:700;
         padding:14px 32px;border-radius:6px;text-decoration:none;box-shadow:0 0 20px rgba(0,212,255,.4)}
    .note{margin-top:24px;font-size:13px;color:#555}
    .note a{color:#00D4FF;text-decoration:none}
  </style>
</head>
<body>
  <div class="card">
    <div class="check">✓</div>
    <h1>Payment confirmed. Check your email.</h1>
    <p>The guide is on its way to your inbox. Also available to download directly below.</p>
    <a href="/dl/guide-v1-d3b34af56a71.pdf" download class="btn">Download PDF</a>
    <p class="note">Questions? <a href="https://x.com/JackMiniAI">@JackMiniAI</a> on X.</p>
  </div>
</body>
</html>`;
      return new Response(html, { headers: { "Content-Type": "text/html" } });
    }

    // All other routes → static assets
    return env.ASSETS.fetch(request);
  },
};
