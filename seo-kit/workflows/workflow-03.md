---
WORKFLOW: Competitor Review Teardown
GOAL: Analyze competitor review patterns to identify review velocity targets and customer language for training.
INPUTS NEEDED: COMPETITOR_GBP_URL_1, COMPETITOR_GBP_URL_2, COMPETITOR_GBP_URL_3
AGENT STEPS:
1. Scrape last 50 reviews from COMPETITOR_GBP_URL_1 (ratings, dates, text)
2. Repeat for COMPETITOR_GBP_URL_2 and COMPETITOR_GBP_URL_3
3. Calculate for each: total review count, average rating, review velocity (last 30/60/90 days)
4. Extract top mentioned services from review text (frequency-ranked)
5. Extract top mentioned neighborhoods from review text
6. Tag staff names mentioned in reviews (personal vs generic references)
7. Identify recurring complaints/negative themes
8. Map top 5 keyword phrases with highest frequency to recommend for customer training
OUTPUT FORMAT: Spreadsheet with velocity comparison + report on service/neighborhood mentions + top 5 trainable keywords
IMPACT: Medium | TIME TO SEE RESULTS: 4-6 weeks
