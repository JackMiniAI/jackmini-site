# Dentist Hard Reset - 2026-08-13

Status:
- prepared for Alex approval
- no sends included in this file

What changes now:
- stop pulling first-touch dentist sends from the current carryover CSV
- reject generic inboxes for first touch unless a lead is exceptional and Alex explicitly approves it
- go back to one concrete observation in line one
- use a clearer CTA than the soft `if you want...`

Why:
- [observed] the August 5 and August 12 dentist batches are in Sent and delivered from `alex@localmapcheck.com`
- [observed] reply search for the current `quick Google Maps note` first-touch batch is still empty on 2026-08-13
- [observed] about half of the recent first touches went to generic inboxes
- [observed] the current CSV has no unsent owner-ish dentist contacts left after removing previously touched businesses

## New first-touch filter

Keep only leads that pass all 6:

1. Contact quality
- direct dentist/owner-style email preferred: named Gmail, doctor mailbox, or role tied to the practitioner
- reject `info@`, `office@`, `frontdesk@`, `contact@`, and similar generic inboxes

2. Real observation
- one concrete issue that can be understood in 5 seconds
- examples:
  - only listed as `Dentist` despite obvious implants/cosmetic/Invisalign offer
  - no Spanish-speaking or Russian-speaking staff attribute where that matters locally
  - very thin photo trust versus nearby competitors

3. Clear service-demand match
- the missing signal must connect to demand the practice already wants
- no abstract SEO framing

4. Business fit
- local service dental practice
- visible website
- visible public email
- obvious Google Maps weakness

5. No recycled touches
- no business already contacted in the June 25, July 8, July 21, August 5, or August 12 batches

6. Plain-English viability
- if the observation cannot be written in one short plain-English sentence, skip it

## Rejection rules

Reject the lead if any of these are true:

- generic inbox only
- no concrete observation
- observation sounds theoretical or hedged
- niche is too broad or multi-location to make one clean point
- we would need to explain Google Maps mechanics instead of the business problem

## CTA rule

Use one of these only:

- `Reply audit and I'll send the 2 biggest fixes I see for [Business Name].`
- `Reply yes and I'll send the 2 biggest fixes I see for [Business Name].`

Do not:
- ask for a call
- mention the paid audit in first touch
- send them to the site as the main CTA

## Replacement first-touch template A - category gap

Use when the site clearly sells implants, Invisalign, cosmetic work, emergency care, or another obvious treatment mix, but the listing likely reads too general.

Subject:
- `[Business Name] - quick Google Maps note`

Body:

```text
Hi,

I took a quick look at [Business Name].

Your Google listing looks too general for someone searching for [service], even though your site makes that clear.

That can cost calls from people already looking for that exact thing.

Reply audit and I'll send the 2 biggest Google Maps fixes I see for [Business Name].

Alex Mikaloff
Founder, Local Map Check
alex@localmapcheck.com
localmapcheck.com
```

## Replacement first-touch template B - local trust/language gap

Use when the stronger point is missing language attributes or weak photo trust in a neighborhood where that signal matters.

Subject:
- `[Business Name] - quick Google Maps note`

Body:

```text
Hi,

I took a quick look at [Business Name].

Your Google listing is missing a trust signal that likely matters in [neighborhood]: [plain-English gap].

That can cost calls from people choosing between you and a nearby practice.

Reply yes and I'll send the 2 biggest Google Maps fixes I see for [Business Name].

Alex Mikaloff
Founder, Local Map Check
alex@localmapcheck.com
localmapcheck.com
```

## Current constraint

- [observed] the current dentist CSV does not contain any unsent owner-ish first-touch contacts after de-duping against prior send logs
- [inferred] the next good batch needs fresh sourcing, not another pass through the same queue

## Next move

- source a fresh dentist mini-batch of 5 using the new filter
- prepare approval-ready drafts only
- send nothing until Alex approves the exact recipients, subjects, and bodies
