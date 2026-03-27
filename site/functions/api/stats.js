export async function onRequest(context) {
  const STRIPE_KEY = context.env.STRIPE_API_KEY;

  if (!STRIPE_KEY) {
    return Response.json({ error: "Missing API key" }, { status: 500 });
  }

  const headers = {
    Authorization: `Bearer ${STRIPE_KEY}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  // Fetch all charges (paginate up to 500 for lifetime)
  async function fetchCharges(params = "") {
    const charges = [];
    let url = `https://api.stripe.com/v1/charges?limit=100&${params}`;
    while (url) {
      const res = await fetch(url, { headers });
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      for (const c of data.data) {
        if (c.paid && !c.refunded && c.status === "succeeded") {
          charges.push(c);
        }
      }
      url = data.has_more
        ? `https://api.stripe.com/v1/charges?limit=100&starting_after=${data.data[data.data.length - 1].id}&${params}`
        : null;
      if (charges.length >= 500) break;
    }
    return charges;
  }

  const now = Math.floor(Date.now() / 1000);
  const day7 = now - 7 * 86400;
  const day30 = now - 30 * 86400;

  const allCharges = await fetchCharges();

  const sum = (charges, since) =>
    charges
      .filter((c) => c.created >= since)
      .reduce((acc, c) => acc + c.amount, 0) / 100;

  const rev7d = sum(allCharges, day7);
  const rev30d = sum(allCharges, day30);
  const revLifetime = allCharges.reduce((acc, c) => acc + c.amount, 0) / 100;
  const totalSales = allCharges.length;

  const result = {
    updated: new Date().toISOString(),
    revenue: {
      "7d": rev7d,
      "30d": rev30d,
      lifetime: revLifetime,
    },
    sales: {
      total: totalSales,
      "7d": allCharges.filter((c) => c.created >= day7).length,
      "30d": allCharges.filter((c) => c.created >= day30).length,
    },
  };

  return Response.json(result, {
    headers: {
      "Cache-Control": "s-maxage=300",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
