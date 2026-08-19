# Dentist Controlled Batch - 2026-07-29

Status: drafted for Alex approval, not sent.

## Recommendation

- Use dentists for this first post-CTA batch.
- Keep it to 5 emails only.
- Use the same offer in every touch: `Get 2 real findings`.
- Send every click to `localmapcheck.com`.
- Do not mention the paid audit yet.

Why this batch:
- [observed] `dentist_queue_audit.py` shows exactly 5 eligible next-send dentist leads after de-dup.
- [observed] each lead has a usable email and a concrete Google Maps angle already logged.
- [inferred] this is the cleanest way to test the new funnel without muddying it across multiple verticals.

## Base email

Subject:
- `[Business Name] - quick Google Maps note`

Body:

```text
Hi,

I took a quick look at [Business Name]'s Google Maps listing.

[one plain-English finding]

That can cost calls from people already looking for that exact kind of dentist.

If useful, you can get 2 real findings here:
localmapcheck.com

Alex Mikaloff
Founder, Local Map Check
alex@localmapcheck.com
```

## The 5 emails

### 1. Gamma Dental Clinic
- Neighborhood: Sheepshead Bay, Brooklyn
- Website: `https://gammadentalclinic.com`
- Email: `gammadental@gmail.com`
- Why this lead:
  - [observed] site makes implants and cosmetic work clear
  - [observed] CSV already flags a category gap plus missing multilingual-staff signal

Subject:
- `Gamma Dental Clinic - quick Google Maps note`

Body:

```text
Hi,

I took a quick look at Gamma Dental Clinic's Google Maps listing.

Your site makes implants and cosmetic work clear, but someone searching on Google Maps may not quickly understand that from the listing alone.

That can cost calls from people already looking for that exact kind of dentist.

If useful, you can get 2 real findings here:
localmapcheck.com

Alex Mikaloff
Founder, Local Map Check
alex@localmapcheck.com
```

### 2. LuxDen Dental Center
- Neighborhood: Sheepshead Bay, Brooklyn
- Website: `https://luxden.com`
- Email: `info@luxden.com`
- Why this lead:
  - [observed] site pushes implants, cosmetic work, same-day care, veneers, sedation, and pediatric
  - [observed] CSV already flags missing cosmetic/implants categories and weak photo depth

Subject:
- `LuxDen Dental Center - quick Google Maps note`

Body:

```text
Hi,

I took a quick look at LuxDen Dental Center's Google Maps listing.

Your site makes implants and cosmetic work clear fast, but someone searching on Google Maps may still see a more general practice than what you actually offer.

That can cost calls from people already looking for that exact kind of dentist.

If useful, you can get 2 real findings here:
localmapcheck.com

Alex Mikaloff
Founder, Local Map Check
alex@localmapcheck.com
```

### 3. Family Smile Dental
- Neighborhood: Sheepshead Bay, Brooklyn
- Website: `https://familysmiledentist.com`
- Email: `familysmiledental@gmail.com`
- Why this lead:
  - [observed] CSV flags Invisalign-specific category gap plus missing multilingual-staff signal
  - [inferred] clean “Google listing may undersell specialty services” angle

Subject:
- `Family Smile Dental - quick Google Maps note`

Body:

```text
Hi,

I took a quick look at Family Smile Dental's Google Maps listing.

Someone searching for Invisalign may not quickly realize you offer it if the Google listing stays too general.

That can cost calls from people already looking for that exact kind of dentist.

If useful, you can get 2 real findings here:
localmapcheck.com

Alex Mikaloff
Founder, Local Map Check
alex@localmapcheck.com
```

### 4. Brooklyn Dental Spa
- Neighborhood: Crown Heights, Brooklyn
- Website: `https://brooklyndentalspa.com`
- Email: `info@brooklyndentalspa.com`
- Why this lead:
  - [observed] site clearly offers implants, emergency care, Invisalign, veneers, whitening, dentures, and orthodontics
  - [observed] CSV flags cosmetic/emergency category gap and low-photo angle

Subject:
- `Brooklyn Dental Spa - quick Google Maps note`

Body:

```text
Hi,

I took a quick look at Brooklyn Dental Spa's Google Maps listing.

Your site makes cosmetic and emergency care clear, but someone searching on Google Maps may not quickly pick that up from the listing alone.

That can cost calls from people already looking for that exact kind of dentist.

If useful, you can get 2 real findings here:
localmapcheck.com

Alex Mikaloff
Founder, Local Map Check
alex@localmapcheck.com
```

### 5. Dr. Howard Silver DDS
- Neighborhood: Williamsburg, Brooklyn
- Website: `https://drhowardsilverdds.com`
- Email: `hsilverdds@verizon.net`
- Why this lead:
  - [observed] site clearly signals cosmetic work, root canal treatment, and whitening
  - [observed] CSV flags cosmetic/root-canal category gap and missing multilingual-staff signal

Subject:
- `Dr. Howard Silver DDS - quick Google Maps note`

Body:

```text
Hi,

I took a quick look at Dr. Howard Silver DDS's Google Maps listing.

Your site makes cosmetic work and root canal treatment clear, but someone searching on Google Maps may not quickly understand that from the listing alone.

That can cost calls from people already looking for that exact kind of dentist.

If useful, you can get 2 real findings here:
localmapcheck.com

Alex Mikaloff
Founder, Local Map Check
alex@localmapcheck.com
```

## What to watch

- [observed] this batch tests the new landing-page CTA, not the old `reply audit` path
- [inferred] success signal is not just opens - it is clicks and real form submissions
- [contrarian] if this batch gets opens but no form fills, the next fix is probably the email promise or trust signal, not more lead volume
