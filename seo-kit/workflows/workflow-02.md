---
WORKFLOW: GBP Attributes Audit
GOAL: Extract and prioritize GBP attributes used by competitors to strengthen listing signals.
INPUTS NEEDED: BUSINESS_GBP_URL, COMPETITOR_GBP_URL_1, COMPETITOR_GBP_URL_2, COMPETITOR_GBP_URL_3
AGENT STEPS:
1. Scrape all visible attributes from BUSINESS_GBP_URL (veteran-owned, free estimates, 24/7, etc.)
2. Repeat scraping for all 3 competitor GBP URLs
3. Create comparative spreadsheet with all attributes found across listings
4. Categorize attributes: "Table Stakes" (present on all 3 competitors), "Strong Recommendations" (2/3 have), "Differentiation Opportunities" (1/3 has)
5. Tag each attribute with estimated ranking impact and CTR impact (high/medium/low)
6. Identify attributes business lacks that 2+ competitors have
7. Provide implementation priority: add Table Stakes first, Strong Recommendations second
OUTPUT FORMAT: Spreadsheet with attribute comparison + prioritized action list with impact ratings
IMPACT: High | TIME TO SEE RESULTS: 1-2 weeks
