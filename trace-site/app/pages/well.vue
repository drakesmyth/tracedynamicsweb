<script setup lang="ts">
useSeoMeta({
  title: 'The WELL',
  description:
    'The WELL is TRACE Dynamics governed corpus of real-world human task data for embodied AI.',
})

const wellStats = [
  {
    value: 'Raw',
    label: 'signal first',
    detail: 'Preserve motion, scene, timing, audio, and context before narrow labels.',
  },
  {
    value: 'Gated',
    label: 'entry path',
    detail: 'Sessions must pass sync, quality, consent, and fraud checks.',
  },
  {
    value: 'Aligned',
    label: 'contributors',
    detail: 'Verified hours can participate in downstream commercial value.',
  },
  {
    value: 'Licensed',
    label: 'deployment',
    detail: 'Research access can be open while production use stays governed.',
  },
]

const dataStreams = [
  {
    eyebrow: 'Scene',
    title: 'What the person sees.',
    body: 'Chest- or head-mounted capture records workspace context, tools, surfaces, obstacles, and nearby collaborators.',
  },
  {
    eyebrow: 'Motion',
    title: 'How the body moves.',
    body: 'A wearable sensor swarm tracks reach, turn, lift, step, pause, and handoff patterns that video alone can miss.',
  },
  {
    eyebrow: 'Timing',
    title: 'When actions unfold.',
    body: 'Synced streams turn ordinary sessions into useful sequences: before, during, after, and between task moments.',
  },
]

const inventorySteps = [
  {
    eyebrow: '01',
    title: 'Capture',
    body: 'Contributors record eligible work with a configured MMT core and body-worn sensors.',
  },
  {
    eyebrow: '02',
    title: 'Validate',
    body: 'TRACE checks session integrity, signal completeness, capture mode, sync, and fraud signals.',
  },
  {
    eyebrow: '03',
    title: 'Package',
    body: 'Useful sessions become dataset inventory with task metadata, quality grading, and access constraints.',
  },
  {
    eyebrow: '04',
    title: 'License',
    body: 'Researchers and builders access the right data products under terms that fit research or deployment.',
  },
]

const governanceCards = [
  {
    eyebrow: 'Quality',
    title: 'Bad hours do not help robots.',
    body: 'The WELL should be smaller and more trustworthy before it is merely bigger. Useful data has sync, context, coverage, and task value.',
  },
  {
    eyebrow: 'Consent',
    title: 'Real spaces need real rules.',
    body: 'Capture modes, contributor guidance, and local consent responsibilities are part of the data product rather than an afterthought.',
  },
  {
    eyebrow: 'Accounting',
    title: 'Credit follows validated work.',
    body: 'Contributor economics only make sense if TRACE can connect accepted sessions to the people who produced them.',
  },
]

const datasetExamples = [
  'Tool use and bench work',
  'Human handoffs',
  'Kitchen and home tasks',
  'Workspace sharing',
  'Human-proximity navigation',
  'Cooperative assembly',
  'Lift, carry, and place sequences',
  'Field repair routines',
]

const accessCards = [
  {
    tone: 'brand' as const,
    eyebrow: 'Research',
    title: 'Build on data that cannot be scraped.',
    body: 'The research path is meant for embodied AI teams exploring physical behavior, data mixtures, policy learning, and evaluation.',
    to: '/request-access?path=researcher',
    label: 'Request research access',
  },
  {
    tone: 'plain' as const,
    eyebrow: 'Contribution',
    title: 'Create the corpus from real work.',
    body: 'The contributor path turns eligible work sessions into governed data inventory after validation and quality review.',
    to: '/request-access?path=contributor',
    label: 'Request contributor access',
  },
]

useScrollReveal()
</script>

<template>
  <div>
    <HeroSection
      eyebrow="The WELL"
      title="A governed corpus for robots that work with humans."
      lead="The WELL is TRACE's data layer for embodied AI: real human task sessions captured outside the lab, validated before use, and structured so contributors can participate in the value they create."
    >
      <template #actions>
        <BaseButton to="/request-access?path=researcher">
          Request research access
        </BaseButton>
        <BaseButton to="/request-access?path=contributor" variant="secondary">
          Become a contributor
        </BaseButton>
      </template>

      <template #visual>
        <MediaFrame
          src="/media/trace-swarm-dashboard.jpg"
          alt="TRACE swarm dashboard showing completed data harvest"
          eyebrow="Pipeline"
          caption="Swarm collection and harvest tooling gives TRACE a practical path from field capture to governed inventory."
          aspect="wide"
        />
      </template>
    </HeroSection>

    <BaseSection>
      <BaseGrid :columns="4" gap="sm">
        <BaseStat
          v-for="item in wellStats"
          :key="item.label"
          :value="item.value"
          :label="item.label"
          :detail="item.detail"
        />
      </BaseGrid>
    </BaseSection>

    <GradientBand>
      <div class="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <BaseHeading
          eyebrow="Why it exists"
          title="Robots need physical experience, not another text corpus."
          lead="The useful substrate is the hard-to-scrape record of human work: body motion, scene context, tools, timing, proximity, and cooperation. The WELL is designed to make that record available without pretending real-world capture is simple."
        />

        <BaseGrid :columns="3" gap="md">
          <BaseCard
            v-for="item in dataStreams"
            :key="item.title"
            :eyebrow="item.eyebrow"
            :title="item.title"
            :body="item.body"
          />
        </BaseGrid>
      </div>
    </GradientBand>

    <BaseSection
      eyebrow="Inventory path"
      title="A recording is not inventory until it earns its way in."
      lead="TRACE treats the WELL as governed infrastructure. The data path moves from capture to validation to packaging to licensing, with contributor accounting connected along the way."
    >
      <DataNetworkFlow />

      <div class="mt-8">
        <BaseGrid :columns="4" gap="md">
          <BaseCard
            v-for="item in inventorySteps"
            :key="item.title"
            :eyebrow="item.eyebrow"
            :title="item.title"
            :body="item.body"
          />
        </BaseGrid>
      </div>
    </BaseSection>

    <BaseSection
      eyebrow="Governance"
      title="The gates are part of the product."
      lead="Real-world task data is powerful because it is real. That also means privacy, quality, consent, and fraud cannot be bolted on later."
      tone="soft"
    >
      <div class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <BaseGrid :columns="3" gap="md">
          <BaseCard
            v-for="item in governanceCards"
            :key="item.title"
            :eyebrow="item.eyebrow"
            :title="item.title"
            :body="item.body"
          />
        </BaseGrid>

        <FlywheelPanel />
      </div>
    </BaseSection>

    <section class="bg-trace-ink py-16 text-white sm:py-20">
      <BaseContainer>
        <div class="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <BaseHeading
            eyebrow="Dataset examples"
            title="The first valuable categories are ordinary."
            lead="The WELL should not start with theatrical demos. It should start where robots are weakest: normal physical work, shared spaces, and messy human timing."
            tone="inverse"
          />

          <div class="grid gap-3 sm:grid-cols-2" data-reveal>
            <div
              v-for="example in datasetExamples"
              :key="example"
              class="rounded-[8px] border border-white/12 bg-white/7 p-4 text-sm font-semibold text-white/86"
            >
              {{ example }}
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <BaseSection
      eyebrow="Access"
      title="Open enough for research. Governed enough for deployment."
      lead="The access model separates exploratory research from commercial use. That keeps the research path useful while preserving licensing, contributor accounting, and dataset integrity."
    >
      <BaseGrid :columns="2" gap="lg">
        <BaseCard
          v-for="item in accessCards"
          :key="item.title"
          :tone="item.tone"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :body="item.body"
        >
          <template #footer>
            <BaseButton :to="item.to" variant="secondary">
              {{ item.label }}
            </BaseButton>
          </template>
        </BaseCard>
      </BaseGrid>
    </BaseSection>

    <CtaPanel
      eyebrow="Build the data layer"
      title="The WELL becomes valuable when real work starts flowing through it."
      lead="The next step is matching contributors and researchers to the right access path, then growing validated sessions into useful dataset inventory."
      primary-label="Request research access"
      primary-to="/request-access?path=researcher"
      secondary-label="Request contributor access"
      secondary-to="/request-access?path=contributor"
    />
  </div>
</template>
