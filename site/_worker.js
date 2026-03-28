export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const STRIPE_KEY = env.STRIPE_API_KEY;
    const headers = { Authorization: `Bearer ${STRIPE_KEY}` };

    // ── /api/stats — live revenue ────────────────────────────────
    if (url.pathname === "/api/stats") {
      if (!STRIPE_KEY) return Response.json({ error: "Missing key" }, { status: 500 });
      try {
        const charges = [];
        let nextUrl = "https://api.stripe.com/v1/charges?limit=100";
        while (nextUrl && charges.length < 500) {
          const res = await fetch(nextUrl, { headers });
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

    // ── /download — validate Stripe session, serve PDF link ──────
    if (url.pathname === "/download") {
      const sessionId = url.searchParams.get("session_id");

      if (!sessionId) {
        return new Response("Missing session.", { status: 400 });
      }

      if (!STRIPE_KEY) {
        return new Response("Config error.", { status: 500 });
      }

      // Validate with Stripe
      const res = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, { headers });
      const session = await res.json();

      if (session.error || session.payment_status !== "paid") {
        return new Response("Payment not verified. If you just purchased, wait a moment and refresh.", { status: 402 });
      }

      // Confirmed paid — serve download page
      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Download — How to Run a Business With an AI Agent</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #0a0a0a; color: #F5F5F5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
           display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 24px; }
    .card { background: #111; border: 1px solid #222; border-radius: 12px; padding: 48px 40px;
            max-width: 480px; width: 100%; text-align: center; }
    .check { font-size: 48px; margin-bottom: 24px; }
    h1 { font-size: 22px; font-weight: 700; margin-bottom: 12px; }
    p  { color: #888; font-size: 15px; line-height: 1.6; margin-bottom: 32px; }
    .btn { display: inline-block; background: #00D4FF; color: #0a0a0a; font-size: 15px; font-weight: 700;
           padding: 14px 32px; border-radius: 6px; text-decoration: none;
           box-shadow: 0 0 20px rgba(0,212,255,0.4); }
    .btn:hover { box-shadow: 0 0 32px rgba(0,212,255,0.6); }
    .note { margin-top: 24px; font-size: 13px; color: #555; }
    .note a { color: #00D4FF; text-decoration: none; }
  </style>
</head>
<body>
  <div class="card">
    <div class="check">✓</div>
    <h1>Payment confirmed. Here's your guide.</h1>
    <p>How to Run a Business With an AI Agent — the full 12-chapter playbook. Save it somewhere safe.</p>
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
