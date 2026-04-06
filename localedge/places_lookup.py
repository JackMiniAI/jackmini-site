#!/usr/bin/env python3
"""
LocalEdge Places Lookup — verify live Google Maps data before including in audit reports.

Usage:
  python3 places_lookup.py "Beress Zalkind PLLC Brooklyn"
  python3 places_lookup.py --api-key AIza... "Business Name City"

Short-term mode (no API key): uses Google search snippets — confirms review counts from live search results.
Long-term mode (with API key): uses Google Places API for exact, structured data.

To get an API key (one-time, ~30 seconds):
  1. Go to console.cloud.google.com
  2. Select project axial-analyzer-492203-r8
  3. APIs & Services → Credentials → Create Credentials → API Key
  4. Restrict to: Places API
  5. Save key to ~/.config/google-places-api-key.txt
"""

import sys
import os
import json
import re
import urllib.parse
import urllib.request

API_KEY_FILE = os.path.expanduser("~/.config/google-places-api-key.txt")


def get_api_key():
    if os.path.exists(API_KEY_FILE):
        with open(API_KEY_FILE) as f:
            return f.read().strip()
    return None


def lookup_via_places_api(query, api_key):
    """Use Places API Text Search to get confirmed review count and rating."""
    encoded = urllib.parse.quote(query)
    url = (
        f"https://maps.googleapis.com/maps/api/place/textsearch/json"
        f"?query={encoded}&key={api_key}&fields=name,rating,user_ratings_total,formatted_address,place_id"
    )
    req = urllib.request.urlopen(url, timeout=10)
    data = json.loads(req.read().decode())

    results = data.get("results", [])
    if not results:
        return None

    best = results[0]
    return {
        "source": "Google Places API (live)",
        "name": best.get("name", ""),
        "address": best.get("formatted_address", ""),
        "rating": best.get("rating", "N/A"),
        "review_count": best.get("user_ratings_total", "N/A"),
        "place_id": best.get("place_id", ""),
        "maps_url": f"https://www.google.com/maps/place/?q=place_id:{best.get('place_id','')}"
    }


def lookup_via_web_search(query):
    """
    Fallback: instruct the agent to search Google and extract review count from the knowledge panel.
    Returns instructions rather than live data — the agent must execute the search.
    """
    search_query = f'"{query}" google maps reviews'
    return {
        "source": "web_search (agent must verify)",
        "instruction": f"Search Google for: {search_query}",
        "note": "Extract the exact review count shown in the Google knowledge panel or Maps snippet. Do not estimate. Only report confirmed numbers."
    }


def main():
    args = sys.argv[1:]
    api_key_override = None

    if "--api-key" in args:
        idx = args.index("--api-key")
        api_key_override = args[idx + 1]
        args = args[:idx] + args[idx + 2:]

    if not args:
        print("Usage: python3 places_lookup.py [--api-key KEY] \"Business Name City\"")
        sys.exit(1)

    query = " ".join(args)
    api_key = api_key_override or get_api_key()

    print(f"\nLooking up: {query}")
    print("-" * 50)

    if api_key:
        result = lookup_via_places_api(query, api_key)
        if result:
            print(f"Source:       {result['source']}")
            print(f"Name:         {result['name']}")
            print(f"Address:      {result['address']}")
            print(f"Rating:       {result['rating']}")
            print(f"Review Count: {result['review_count']}  ← USE THIS NUMBER IN REPORT")
            print(f"Maps URL:     {result['maps_url']}")
            print(f"Place ID:     {result['place_id']}")
        else:
            print("No results found via Places API.")
    else:
        print("No API key found. Run in agent mode:")
        result = lookup_via_web_search(query)
        print(f"Instruction: {result['instruction']}")
        print(f"Note: {result['note']}")
        print(f"\nTo enable live lookup: save your API key to {API_KEY_FILE}")
        print("See file header for instructions to create the key (~30 seconds).")

    print()


if __name__ == "__main__":
    main()
