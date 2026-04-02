---
WORKFLOW: Review Response Strategy
GOAL: Build a review response template system that matches keyword usage, location mentions, and tone optimization from top performers.
INPUTS NEEDED: BUSINESS_GBP_URL, COMPETITOR_GBP_URL_1, COMPETITOR_GBP_URL_2, COMPETITOR_GBP_URL_3, SERVICE_KEYWORD, LOCATION_KEYWORD
AGENT STEPS:
1. Scrape last 30 review responses from BUSINESS_GBP_URL (if any exist)
2. Scrape last 30 responses from each competitor (120 total reviewed)
3. Track metrics per source: response rate, avg word count, keyword density, location mentions, tone, negative response strategy
4. Identify patterns in high-performing responses (above 4.8-star average businesses)
5. Write 12 template variations: 3 each for 5-star (gratitude), 4-star (acknowledgment), 3-star (clarification), 1-2 star (professional recovery)
6. Each template 40-80 words, natural language, including SERVICE_KEYWORD and LOCATION_KEYWORD
7. Include escalation triggers for negative reviews requiring human follow-up
OUTPUT FORMAT: Document with tone analysis comparison + 12 response templates organized by star rating
IMPACT: Medium | TIME TO SEE RESULTS: 2-3 weeks
