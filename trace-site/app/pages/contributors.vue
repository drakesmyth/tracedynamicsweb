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
    body: 'Useful sessions come from real homes, shops, kitchens, benches, job sites, and workspaces rather than staged routines.',
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
    title: 'Validated hours participate in the upside.',
    body: 'TRACE is designed so the people producing the dataset participate when commercial licensing creates value. Exact terms are set during onboarding.',
  },
  {
    tone: 'plain' as const,
    eyebrow: 'Early network',
    title: 'The first useful hours matter most.',
    body: 'Early contributors help seed the dataset, prove the capture workflow, and establish the task categories future researchers and builders can use.',
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
      title="Turn real work into the data robots need."
      lead="TRACE is opening an early contributor path for people who can capture useful physical work with lightweight sensor hardware. Verified sessions help build the WELL: governed human task data for embodied AI."
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
      lead="Strong contributor sessions show movement, tools, timing, proximity, and shared space. TRACE is especially interested in cooperative task data that is hard to synthesize or scrape."
    >
      <div class="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <MediaFrame
          src="/media/trace-hardware-field-photo.jpeg?v=2"
          alt="TRACE prototype hardware with sensor and camera connections"
          eyebrow="Field hardware"
          caption="Prototype TRACE capture hardware connected during bench and field testing."
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
      lead="TRACE is built around contributor alignment. Exact terms belong in onboarding, but the principle is simple: useful verified work should not disappear into someone else's dataset."
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
    </BaseSection>

    <CtaPanel
      eyebrow="Start here"
      title="Request contributor access for early hardware."
      lead="Tell TRACE what you can capture, which settings you work in, and what kit configuration would make those sessions useful."
      primary-label="Request contributor access"
      primary-to="/request-access?path=contributor"
      secondary-label="Researcher path"
      secondary-to="/researchers"
    />
  </div>
</template>
