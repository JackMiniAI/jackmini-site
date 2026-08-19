# Dentist Next Send Queue - 2026-07-21

Status:
- paused

Reason:
- on Tuesday, July 21, 2026, `20` dentist emails were sent from `alex@localmapcheck.com`
- `5` businesses got both a follow-up and a fresh first-touch email the same day because the follow-up pool and first-touch pool overlapped
- do not send another dentist batch until reply review is done and the queue stays de-duplicated

Do not send before:
1. review replies from the July 21 batch
2. keep the five overlap businesses out of any new send plan
3. confirm the next queue against `scripts/dentist_queue_audit.py`

Holdout businesses from the overlap mistake:
- Deluxe Dental
- Eco Dental NY
- Jackson Heights Dental
- Queens Professional Dental Care
- Bay Ridge Dental Arts

July 21 batch already touched and should stay out of the next-send queue:
- Cosmopolitan Dental of Brooklyn
- Sam's Family Dental
- VITAdent Brooklyn Dental Group
- 5th Avenue Dentistry and Implants
- NY Legacy Dentistry
- Bay Ridge Dental Arts
- Queens Professional Dental Care
- Jackson Heights Dental
- Eco Dental NY
- Deluxe Dental
- Steinway Family Dental Center
- I Smile Dental
- New Smile Astoria
- ED Family Dental
- JASI Smile

Next eligible first-touch leads after de-dup:
- Gamma Dental Clinic - `gammadental@gmail.com` - Sheepshead Bay
- LuxDen Dental Center - `info@luxden.com` - Sheepshead Bay
- Family Smile Dental - `familysmiledental@gmail.com` - Sheepshead Bay
- Brooklyn Dental Spa - `info@brooklyndentalspa.com` - Crown Heights
- Dr. Howard Silver DDS - `hsilverdds@verizon.net` - Williamsburg

Constraint:
- this is only `5` clean email leads, not a full batch of `10`
- if dentists remain worth pursuing after reply review, top this list up with fresh research instead of reusing any July 21 contacts
