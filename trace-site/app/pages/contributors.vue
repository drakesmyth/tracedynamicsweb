<script setup lang="ts">
useSeoMeta({
  title: 'Contributors',
  description:
    'Request contributor access, configure TRACE capture hardware, and help build the data layer robots cannot scrape.',
})

const contributorStats = [
  {
    value: 'MMT',
    label: 'required core',
    detail: 'Chest- or head-mounted scene and task sensing.',
  },
  {
    value: '6–20',
    label: 'body sensors',
    detail: 'Configured by task, motion fidelity, and setting.',
  },
  {
    value: '~$200',
    label: 'baseline target',
    detail: 'Gen3-class core plus six to eight body sensors.',
  },
  {
    value: 'Gated',
    label: 'validated hours',
    detail: 'Only compliant, validated hours count.',
  },
]

const captureSteps = [
  {
    eyebrow: '01',
    title: 'Request access',
    body: 'Tell TRACE what work you can capture, where it happens, and which hardware path fits the session.',
  },
  {
    eyebrow: '02',
    title: 'Configure the kit',
    body: 'The MMT records scene context while body sensors capture how you move, reach, turn, lift, and share space.',
  },
  {
    eyebrow: '03',
    title: 'Capture real sessions',
    body: 'Useful sessions come from real homes, shops, kitchens, benches, job sites, and workspaces — wherever the work already happens.',
  },
  {
    eyebrow: '04',
    title: 'Submit for validation',
    body: 'TRACE checks sync, completeness, quality, capture mode, and fraud signals before a session enters the WELL.',
  },
]

const validationCards = [
  {
    eyebrow: 'Quality',
    title: 'The data has to be useful.',
    body: 'Sessions are checked for sensor sync, signal completeness, task relevance, and enough context to train future behavior models.',
  },
  {
    eyebrow: 'Consent',
    title: 'Capture rules are part of the work.',
    body: 'Contributors choose capture modes and are responsible for local laws and permissions. TRACE supplies controls and guidance.',
  },
  {
    eyebrow: 'Fraud',
    title: 'Credit follows real production.',
    body: 'Synthetic, replayed, duplicated, low-effort, or non-compliant capture can be rejected before it earns contributor accounting credit.',
  },
]

const ownershipCards = [
  {
    tone: 'brand' as const,
    eyebrow: 'Contributor share',
    title: 'Paid every time the data earns.',
    body: 'Your share keeps paying. Every time the WELL is licensed, contributors are paid a share of that payment — and again on the next one, for as long as the data keeps earning. Exact terms are set during onboarding.',
  },
  {
    tone: 'plain' as const,
    eyebrow: 'Early network',
    title: 'The first hours are worth the most.',
    body: 'The rate for each recorded hour starts at up to 64× and only falls toward a 1× baseline. Get in early — 30× or more is still on the table for the first public contributors — and every hour you bank holds that rate for as long as the data licenses.',
  },
]

const sessionTypes = [
  'Tool use',
  'Handoffs',
  'Workspace sharing',
  'Kitchen work',
  'Bench work',
  'Human-proximity navigation',
]

useScrollReveal()
</script>

<template>
  <div>
    <HeroSection
      eyebrow="Contributors"
      title="Record your work once. Get paid as long as it earns."
      lead="Capture the work you already do with a light sensor kit, and earn a share of the licensing revenue it generates — for as long as the data keeps earning. The earning rate is highest now and falls as the WELL grows, so the hours you bank early are worth the most, year after year. Kits ship to the first cohort first."
    >
      <template #actions>
        <BaseButton to="/request-access?path=contributor">
          Request contributor access
        </BaseButton>
        <BaseButton to="/well" variant="secondary">Explore the WELL</BaseButton>
      </template>

      <template #visual>
        <ProductConfigPanel />
      </template>
    </HeroSection>

    <BaseSection>
      <BaseGrid :columns="4" gap="sm">
        <BaseStat
          v-for="item in contributorStats"
          :key="item.label"
          :value="item.value"
          :label="item.label"
          :detail="item.detail"
        />
      </BaseGrid>
    </BaseSection>

    <BaseSection
      eyebrow="How contribution works"
      title="Request access. Capture useful work. Submit sessions for validation."
      lead="TRACE is not asking contributors to perform for a camera. The goal is ordinary task data with enough sensor fidelity, consent discipline, and quality control to make it useful."
      tone="soft"
    >
      <BaseGrid :columns="4" gap="md">
        <BaseCard
          v-for="item in captureSteps"
          :key="item.title"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :body="item.body"
        />
      </BaseGrid>
    </BaseSection>

    <BaseSection
      eyebrow="Eligible sessions"
      title="The first priority is useful, ordinary physical work."
      lead="Strong contributor sessions show movement, tools, timing, proximity, and shared space. TRACE is especially interested in cooperative task data that can't be simulated or collected after the fact."
    >
      <div class="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <MediaFrame
          src="/media/trace-work-diy.jpg"
          alt="A person wearing the TRACE kit while drilling at a workbench at home"
          eyebrow="Ordinary work"
          caption="A contributor captures a normal task — the kit records how they reach, hold, and work, wherever the work happens."
          aspect="wide"
        />

        <div>
          <div class="flex flex-wrap gap-2" data-reveal>
            <BasePill
              v-for="sessionType in sessionTypes"
              :key="sessionType"
              tone="cyan"
            >
              {{ sessionType }}
            </BasePill>
          </div>

          <BaseCard
            class="mt-6"
            tone="brand"
            eyebrow="What counts"
            title="Ordinary work is the point."
            body="A simple, well-synced session of someone doing real work can be more valuable than a polished clip. The system cares about physical behavior, context, and validation."
          />
        </div>
      </div>
    </BaseSection>

    <GradientBand>
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <BaseHeading
          eyebrow="Validation"
          title="Validation protects contributors and researchers."
          lead="Contributor trust depends on clear gates. Sessions have to pass quality, consent-aware capture settings, and fraud checks before they enter the WELL or earn credit."
        />

        <BaseGrid :columns="3" gap="md">
          <BaseCard
            v-for="item in validationCards"
            :key="item.title"
            :eyebrow="item.eyebrow"
            :title="item.title"
            :body="item.body"
          />
        </BaseGrid>
      </div>
    </GradientBand>

    <BaseSection
      eyebrow="The upside"
      title="The people who produce the data should participate in what it earns."
      lead="TRACE is built around contributor alignment: the work you verify should not disappear into someone else's dataset. Exact terms are set during onboarding."
    >
      <BaseGrid :columns="2" gap="lg">
        <BaseCard
          v-for="item in ownershipCards"
          :key="item.title"
          :tone="item.tone"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :body="item.body"
        />
      </BaseGrid>

      <div
        class="mt-8 grid items-center gap-8 rounded-trace border border-trace-line bg-white/70 p-6 shadow-soft lg:grid-cols-[auto_1fr]"
        data-reveal
      >
        <EarningsCurve />
        <div>
          <p class="text-sm font-semibold uppercase text-trace-blue">
            How the recurring share works
          </p>
          <ol class="mt-4 grid gap-3 text-sm leading-6 text-trace-muted">
            <li>
              <span class="font-semibold text-trace-ink">Your session is validated</span>
              and enters the WELL.
            </li>
            <li>
              <span class="font-semibold text-trace-ink">Each time it is licensed</span>,
              you are paid a share of that payment.
            </li>
            <li>
              <span class="font-semibold text-trace-ink">It pays again on the next license</span>
              — for as long as the data keeps earning.
            </li>
          </ol>
          <p class="mt-4 text-sm leading-6 text-trace-muted">
            The multiplier only falls — up to 64× at the start, 30× or more for
            early public contributors, toward 1× as the network matures. The hours
            you bank early hold their rate for good.
          </p>
        </div>
      </div>
    </BaseSection>

    <CtaPanel
      eyebrow="Start here"
      title="Get in while the rate is highest."
      lead="The first cohort gets kits first, and every hour you bank early is worth more for good. Tell TRACE what you can capture and where you work to claim your place in line."
      primary-label="Request contributor access"
      primary-to="/request-access?path=contributor"
      secondary-label="Researcher path"
      secondary-to="/researchers"
    />
  </div>
</template>
