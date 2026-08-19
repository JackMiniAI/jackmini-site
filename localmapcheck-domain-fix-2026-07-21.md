# Local Map Check Domain Fix - July 21, 2026

## Goal

Restore the intended split:

- `localmapcheck.com/` serves the standalone Local Map Check homepage
- `jackmini.com/` serves the Jack Mini homepage
- `jackmini.com/local-edge` serves the LocalEdge bridge/sales page

## Root Cause

Production is still running the older one-domain version of the site:

- committed `site/index.html` = Jack Mini homepage
- committed `site/_worker.js` = no host-specific branch for `localmapcheck.com`

The two-domain split exists only in local uncommitted changes:

- `site/index.html` = Local Map Check homepage
- `site/jackmini-home.html` = Jack Mini homepage
- `site/_worker.js` = host-aware routing for both domains

## Exact Patch

Deploy only these files:

- `site/_worker.js`
- `site/index.html`
- `site/jackmini-home.html`

Do not bundle unrelated modified files from this working tree into the fix commit.

## Safe Staging Commands

Run from repo root:

```bash
git add site/_worker.js site/index.html site/jackmini-home.html
git diff --cached -- site/_worker.js site/index.html site/jackmini-home.html
git status --short
```

Expected staged outcome:

- `site/_worker.js` contains `const hostname = url.hostname.toLowerCase().replace(/^www\\./, "");`
- `site/_worker.js` contains a `hostname === "jackmini.com"` branch serving `/jackmini-home.html`
- `site/_worker.js` contains a `hostname === "localmapcheck.com"` branch redirecting `/local-edge` and `/gbp-audit` to `/`
- `site/index.html` has `<title>Local Map Check</title>`
- `site/index.html` has `og:url` set to `https://localmapcheck.com`
- `site/jackmini-home.html` has `<title>Jack Mini - AI That Runs the Business</title>` or equivalent Jack Mini home metadata

## Commit

Recommended commit:

```bash
git commit -m "Fix domain split for localmapcheck and jackmini"
```

## Deploy

This repo's README says Cloudflare Pages deploys from:

- repo: `JackMiniAI/jackmini-site`
- output directory: `site/`

Deploy path:

1. Push the commit that contains only the three files above.
2. Let Cloudflare Pages build from the `site/` directory.
3. Wait for the deployment to finish.

## Post-Deploy Verification

### Browser behavior

Expected live behavior after deploy:

- `https://localmapcheck.com/` -> Local Map Check homepage
- `https://localmapcheck.com/local-edge` -> `301` or `302` to `https://localmapcheck.com/`
- `https://localmapcheck.com/gbp-audit` -> `301` or `302` to `https://localmapcheck.com/`
- `https://jackmini.com/` -> Jack Mini homepage
- `https://jackmini.com/local-edge` -> LocalEdge sales page
- `https://jackmini.com/gbp-audit` -> redirect to `https://jackmini.com/local-edge`

### Command-line checks

```bash
python3 - <<'PY'
import requests
tests = [
    ("https://localmapcheck.com/", "Local Map Check"),
    ("https://jackmini.com/", "Jack Mini"),
    ("https://jackmini.com/local-edge", "LocalEdge"),
]
for url, expected in tests:
    r = requests.get(url, timeout=20)
    title = ""
    text = r.text
    i = text.find("<title>")
    j = text.find("</title>")
    if i != -1 and j != -1:
        title = text[i+7:j]
    print(url, r.status_code, title)
    if expected not in title:
        raise SystemExit(f"FAIL: {url} title mismatch: {title}")
print("title checks OK")
PY
```

```bash
curl -I -s https://localmapcheck.com/local-edge | sed -n '1,12p'
curl -I -s https://localmapcheck.com/gbp-audit | sed -n '1,12p'
curl -I -s https://jackmini.com/gbp-audit | sed -n '1,12p'
```

Pass criteria:

- `localmapcheck.com/local-edge` does not return a `200` page body for LocalEdge
- `localmapcheck.com/gbp-audit` does not return a `200` page body for GBP Audit
- `jackmini.com/gbp-audit` points to `/local-edge`

## Business Check

Before resuming any Local Map Check outreach, verify this exact trust path:

1. Visit `localmapcheck.com/`
2. Confirm the page reads like a Google Maps audit business, not Jack Mini
3. Confirm email signature domain and landing page now match
4. Only then reuse the domain in cold outreach

## Why This Matters

This fix removes a real trust break:

- outbound email sender: `alex@localmapcheck.com`
- prior landing page reality: Jack Mini AI operator site
- expected landing page reality: Google Maps audit offer

That mismatch could plausibly suppress reply rates even if the offer and copy were otherwise acceptable.
