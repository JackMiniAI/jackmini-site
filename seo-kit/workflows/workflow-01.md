---
WORKFLOW: GBP Category Audit
GOAL: Identify primary and secondary GBP categories used by Map Pack competitors to close ranking gaps.
INPUTS NEEDED: BUSINESS_GBP_URL, TARGET_KEYWORD_1, TARGET_KEYWORD_2, TARGET_KEYWORD_3
AGENT STEPS:
1. Search Google Maps for TARGET_KEYWORD_1 and identify top 3 businesses in the Map Pack
2. Extract their GBP primary category and all secondary categories from their public profiles
3. Repeat steps 1-2 for TARGET_KEYWORD_2 and TARGET_KEYWORD_3
4. Extract current categories from BUSINESS_GBP_URL
5. Build matrix comparing business categories vs all competitor categories
6. Calculate frequency: how many competitors use each category the business lacks
7. Prioritize missing categories by frequency (used by 2-3 competitors = high priority)
8. Recommend 3 new primary/secondary categories to add based on competitor overlap
OUTPUT FORMAT: Spreadsheet with competitor category matrix + prioritized list of categories to add with frequency counts
IMPACT: High | TIME TO SEE RESULTS: 1-2 weeks
