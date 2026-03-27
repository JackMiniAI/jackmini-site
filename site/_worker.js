export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/stats") {
      const STRIPE_KEY = env.STRIPE_API_KEY;
      if (!STRIPE_KEY) {
        return Response.json({ error: "Missing API key" }, { status: 500 });
      }

      const headers = { Authorization: `Bearer ${STRIPE_KEY}` };

      try {
        const charges = [];
        let nextUrl = "https://api.stripe.com/v1/charges?limit=100";

        while (nextUrl && charges.length < 500) {
          const res = await fetch(nextUrl, { headers });
          const data = await res.json();
          if (data.error) throw new Error(data.error.message);
          for (const c of data.data) {
            if (c.paid && !c.refunded && c.status === "succeeded") {
              charges.push(c);
            }
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
          revenue: {
            "7d": sum(day7),
            "30d": sum(day30),
            lifetime: charges.reduce((a, c) => a + c.amount, 0) / 100,
          },
          sales: {
            total: charges.length,
            "7d": charges.filter((c) => c.created >= day7).length,
            "30d": charges.filter((c) => c.created >= day30).length,
          },
        }, {
          headers: {
            "Cache-Control": "s-maxage=300",
            "Access-Control-Allow-Origin": "*",
          },
        });
      } catch (e) {
        return Response.json({ error: e.message }, { status: 500 });
      }
    }

    // All other routes → static assets
    return env.ASSETS.fetch(request);
  },
};
