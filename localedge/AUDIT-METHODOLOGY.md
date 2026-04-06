# LocalEdge Audit Methodology — Data Quality Rules

## The Problem This Document Solves
A previous audit reported "~219 Google reviews" for a firm that actually had 339. The tilde (~) indicated an estimate. That's not acceptable in a $299 paid report — clients will check and lose trust immediately.

**Rule: Never estimate. Never use ~ on numbers you can verify. Only report confirmed data.**

---

## Data Confidence Levels

Every number in an audit report must be labeled with one of:

- **[CONFIRMED]** — pulled directly from live Google Maps listing or Places API, with source URL cited
- **[ESTIMATED]** — agent approximation, clearly labeled as such, with reasoning
- **[NOT FOUND]** — field not available; do not guess

Never present an estimated number as a confirmed fact.

---

## Step-by-Step Audit Process

### Step 1: Confirm the Correct Listing (Before Anything Else)

Search Google Maps for the business. Verify:
- Business name matches exactly
- Address matches the client's address
- This is the primary listing (not a duplicate or branch)

Some businesses have multiple listings. If multiple exist, audit the one with the most reviews — that's the one affecting their rankings.

Record the Google Maps URL in the report.

### Step 2: Pull Confirmed Review Data

**With Places API key** (`~/.config/google-places-api-key.txt` exists):
```bash
python3 /Users/jackmini/projects/jackmini/localedge/places_lookup.py "Business Name City State"
```
Use the returned `review_count` and `rating` as [CONFIRMED] data.

**Without Places API key** (agent-only):
1. Search Google: `"[Business Name]" "[City]" google maps reviews`
2. Read the number from the knowledge panel snippet (e.g., "4.8 ★ · 339 reviews")
3. Cross-check by fetching the Google Maps listing URL and reading the review count shown
4. Record as [CONFIRMED] with the date and source URL

**Never do this:** Search for general info about the business and guess a review count based on what you know or how established the firm seems.

### Step 3: Confirm Competitor Data the Same Way

For each competitor:
- Find their exact Google Maps listing URL
- Pull confirmed review count using same method
- Record as [CONFIRMED] with date

### Step 4: Label Everything

In the report, every key metric must show its status:

✓ Google Reviews: **339** [CONFIRMED via Google Maps, 2026-04-03]
✗ Do not write: "Google Reviews: ~219 total"

---

## What to Do When You Can't Confirm a Number

If a number can't be confirmed via live search:
- Label it clearly: **[ESTIMATED — verify before acting]**
- Explain why it's estimated
- Tell the client to verify before relying on it

One honest caveat is better than one wrong number.

---

## Getting the Places API Key (One-Time Setup)

1. Go to console.cloud.google.com
2. Select project: `axial-analyzer-492203-r8`
3. APIs & Services → Library → search "Places API" → Enable
4. APIs & Services → Credentials → Create Credentials → API Key
5. Restrict the key: Application restrictions = None, API restrictions = Places API
6. Save the key: `echo "AIza..." > ~/.config/google-places-api-key.txt && chmod 600 ~/.config/google-places-api-key.txt`

Once done, `places_lookup.py` will use live API data automatically.

---

## Audit Report Template Requirements

Each paid audit report must include:
- Business name + Google Maps URL (confirmed listing)
- Review count [CONFIRMED with date]
- Rating [CONFIRMED with date]
- Competitor listings with same confirmed data
- All category/attribute gaps based on direct observation, not assumption

Last updated: 2026-04-03
