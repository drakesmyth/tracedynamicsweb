# TRACE Site — Improvement Plan & Imagery Brief

Living roadmap for the marketing site. Derived from a competitive audit against three
peer categories (DePIN data-earn networks · robotics / embodied-AI labs · data & dataset
platforms) plus the early-stage constraints (bench PCBs today; first cased wearables a few
weeks out; no deployed fleet, traction numbers, logos, or contributor photos yet).

Guiding principle: **dramatize what is genuinely true (specs, math, the built-and-field-tested
stack) — never fabricate traction.** Peers don't beat us on substance; they beat us on proof,
imagery, and making the model concrete.

---

## 0. Done (this pass — in PR #1)

- Copy aligned to the Executive Summary / whitepaper; internal build-notes scrubbed from visible copy.
- `Gen3/Gen4` nomenclature; "depth mapping"; audio surfaced as a WELL stream.
- Contributors reframed around **residual income** (recurring share, front-loaded multiplier).
- Differentiators visualized: **accuracy schematic** (15–25 cm uncertainty vs. measured), **earnings-multiplier curve**, **capability row**.
- Storefront **gated** (coming-soon; `/product/*` redirected). **Request Access** rebuilt. **/team** page added.

---

## 1. Tasks ahead

### A. Build now — design + copy, no new assets required
Highest leverage, no external dependencies. Roughly in priority order.

1. **Light-premium restyle (the big one).** Retire the pastel gradient card-grid — it's the visual
   tell of a dev-built site and appears on zero top peers. Commit to one system: **disciplined
   light-premium** (Figure/Wayve/1X/Physical Intelligence) is the recommended, lower-lift path.
   Fewer cards, more whitespace, the blue→green gradient as a *restrained accent*, dark sections as
   occasional punctuation. (The homepage capability row is a first taste of the target aesthetic.)
2. **Spec "proof bar."** We can't show traction numbers yet, but we can lead with real capability
   figures: **15–25 cm · 6–20 sensors · <1 ms sync · ~$200 · 6 PB+/M hrs.** Elevate the homepage
   stat row and repeat a version on The WELL and Contributors.
3. **Concrete task naming.** Replace abstract "human motion" with named real-work scenarios
   (a line cook plating, a plumber under a sink, a warehouse pick) — specificity reads as real.
4. **Researchers page depth:**
   - **License lanes** as two cards: Research = free (click-through) · Commercial = licensed.
   - **Access flow + SLA** copy: "sign the license → reviewed in ~N days → download," friction-reducing ("rolling / free for research").
   - **Schema table** (field · type · units · rate) pulled from the storage/capture spec.
   - **Session-specimen schematic** — one session as time-aligned tracks (context video / depth / IMU / audio).
5. **Consent / ethics pillar** (copy + design). A visible section (or page) — a differentiator for a
   "record people at work" product, and a liability if hidden.
6. **Pipeline diagram** upgrade: kit → synchronized streams → the WELL → LBM training → humanoid.
7. **Build-log / research feed** scaffold — a dated list of real engineering milestones (capture stack
   built, bench-validated, cased wearables shipping). Signals momentum like a lab, not a static startup.
8. **Contributors polish:** a 3–4 step "how you earn" strip with time/effort; the early multiplier as
   a named tier ("Founding contributors").

### B. Needs real inputs — from you / relationships (defer, design as swap-ready slots)

- **Proof bar of traction** (hours captured, contributors, sessions, cities) — once devices deploy.
- **Logo walls:** backers, press, partner labs/universities, advisors (with affiliations).
- **Named contributor testimonials + faces** — after the first wearables ship.
- **Certifications / trust badges** (SOC 2, IRB/ethics, privacy) — as they land; a mission/consent seal can stand in early.
- **Investor contact line** — a private channel (e.g. `investors@`), not a public form (general-solicitation caution).

### C. Bigger bets

- **Signature data/network visualization** — a "diversity/coverage" viz of the kinds of work/environments
  captured (the analog to DePIN coverage maps). This is where the currently-unused Three.js belongs — data,
  not decoration.
- **Dataset preview** ("look before you ask") for researchers — hover an activity, see the streams.
- **Vercel preview on the fork** — so the branch has a shareable live URL for non-technical review.

### D. Smaller cleanups (parked)

- Full light-premium migration of remaining card-heavy sections (subsumed by A.1).
- Remove the now-unused `AnimatedDivider.vue`.
- Constant-time compare on the admin token (`server/api/admin/request-access.get.ts`).
- Subpage stat rows still use qualitative word-"stats" — reconcile with the homepage's quantified bar.

---

## 2. Photos needed (new — to shoot or create)

The whole peer field under-shows *people* — and TRACE is fundamentally about humans doing real work.
That's the opening. Tier 1 fixes the most acute gaps.

**Tier 1 — create first**
1. **Hero: a real worker mid-task wearing the kit** (warehouse pick, line cook, mechanic), documentary-warm,
   natural motion — ideally with a live **skeleton/pose overlay**. The "measured, in-the-wild, real" thesis in one frame.
2. **Accuracy contrast, real version** — split-screen: video-estimated pose (fuzzy/wrong) vs. the measured
   skeleton. (We have an SVG schematic now; a real capture is the upgrade.)
3. **Product-photography of the kit** on neutral seamless, Apple-style (+ an exploded/annotated version naming each sensor).
4. **Multimodal "session specimen"** — a real session as time-aligned stacked tracks (context video / depth / IMU / audio).
5. **Diversity grid** — 6–9 different people in different trades all wearing the kit (breadth = the scaling story).

**Tier 2**
6. **Recurring-earnings** rendered on a phone / app mock (real payout-over-time).
7. **Depth / point-cloud "beauty" render** of a person mid-motion (technical-sublime gravitas shot).
8. **Validation/quality funnel** graphic (capture → sync → consent → fraud/quality → accepted).
9. **Consent/ethics trust panel** visual.
10. **Later:** partner/advisor logo wall · named-contributor headshots.

**Timing:** #1, #3, #5 depend on the cased wearables (a few weeks out). #2, #4, #7 can start from bench
capture data now if any exists; otherwise they follow the wearables.

---

## 3. Photo upgrades (existing assets to improve)

Current imagery reads as engineering artifacts, not brand assets. Fixes that need no new hardware:

1. **Reshoot the bench PCBs as premium product photography** — macro, intentional lighting, shallow depth of
   field, clean seamless background. A bare board shot well reads as beautiful (cf. Hivemapper's "Bee"). Replaces
   the current board render (`trace-mmt-board-render.jpg`) and the dev-desk bench photo (`trace-hardware-field-photo.jpeg`).
2. **Annotated / exploded sensor callout** overlaid on a clean board shot — turns a photo into an explainer.
3. **Swarm dashboard screenshot** (`trace-swarm-dashboard.jpg`) → either a cleaner designed version or replace
   with the pipeline/specimen visuals; a raw screenshot reads as internal tooling.
4. **Team photos** (`/team`): mixed crops today (Elena portrait vs. others square) — normalize framing / light
   retouch for consistency; add surnames, titles, and optional social links (the old site had social icons).

---

## 4. Sequencing

- **Now:** Section 1.A (design + copy) and Section 3 (bench reshoots + annotations). No blockers.
- **When cased wearables land (~weeks):** Tier-1 people/kit photography (Section 2 #1, #3, #5).
- **As the network grows:** Section 1.B (proof bar, testimonials, logos) drops into the swap-ready slots.
- **Ongoing:** the build-log feed — start now with real milestones, keep adding.
