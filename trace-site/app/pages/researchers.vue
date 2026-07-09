<script setup lang="ts">
useSeoMeta({
  title: 'Researchers',
  description:
    'Request research access to TRACE Dynamics, the WELL, and governed real-world human task data.',
})

const researchStats = [
  {
    value: 'WELL',
    label: 'data corpus',
    detail: 'Governed real-world human task sessions for embodied AI.',
  },
  {
    value: 'Multi',
    label: 'modal streams',
    detail: 'Motion, scene, timing, audio, and task context captured together.',
  },
  {
    value: 'Early',
    label: 'access path',
    detail: 'Built for early research and pre-revenue exploration.',
  },
  {
    value: 'License',
    label: 'deployment',
    detail: 'Commercial use requires terms that protect the dataset and contributors.',
  },
]

const dataCards = [
  {
    eyebrow: 'Behavior',
    title: 'Human task sequences.',
    body: 'Study how real people reach, pause, hand off, recover, share workspaces, and move through cluttered spaces.',
  },
  {
    eyebrow: 'Context',
    title: 'Scene and motion together.',
    body: 'Pair first-person scene data with body-worn motion streams so policy work can connect intent, environment, and movement.',
  },
  {
    eyebrow: 'Diversity',
    title: 'Outside the lab.',
    body: 'Generalization tracks the diversity of training data more than raw repetitions — and diversity is exactly what ordinary, varied settings produce and staged demos cannot.',
  },
]

const useCases = [
  'Policy pretraining',
  'Imitation learning',
  'Human-aware navigation',
  'Manipulation priors',
  'Cooperative task modeling',
  'Dataset mixture studies',
  'Embodied evaluation',
  'Safety and proximity research',
]

const accessSteps = [
  {
    eyebrow: '01',
    title: 'Request research access.',
    body: 'Share the research problem, task category, model type, and whether the work is academic, open, pre-revenue, or commercial.',
  },
  {
    eyebrow: '02',
    title: 'Match the right data path.',
    body: 'TRACE can map early requests to exploratory data products while keeping deployment licensing separate.',
  },
  {
    eyebrow: '03',
    title: 'Work inside clear terms.',
    body: 'Access should protect contributors, consent boundaries, privacy controls, and the long-term usefulness of the corpus.',
  },
]

const licensingCards = [
  {
    eyebrow: 'Research',
    title: 'Exploration should be easy to start.',
    body: 'Non-commercial research and pre-revenue work can use a lighter path where the goal is learning, evaluation, and publication rather than deployment.',
  },
  {
    eyebrow: 'Commercial',
    title: 'Deployment needs licensing.',
    body: 'When data contributes to a commercial model or product, licensing should support dataset operations and contributor-aligned economics.',
  },
  {
    eyebrow: 'Governance',
    title: 'Terms follow the data.',
    body: 'Different task categories may carry different quality grades, capture constraints, privacy boundaries, and downstream usage limits.',
  },
]

const faqs = [
  {
    eyebrow: 'Data format',
    title: 'Will the WELL be raw or labeled?',
    body: 'The intent is to preserve raw multimodal value while adding enough metadata, task structure, and quality grading to make research work practical.',
  },
  {
    eyebrow: 'Availability',
    title: 'How does access start?',
    body: 'Research access starts through the request flow. TRACE uses that intake to understand fit, task category, and the right access path as WELL inventory grows.',
  },
  {
    eyebrow: 'Synthetic data',
    title: 'Why not use simulation only?',
    body: 'Simulation and video-estimated pose help, but benchmarked against marker-based capture, pose inferred from video drifts 15–25 cm per joint. Robots still need the measured record of human physical behavior: timing, hesitation, tool use, proximity, and adaptation.',
  },
]

useScrollReveal()
</script>

<template>
  <div>
    <HeroSection
      eyebrow="Researchers"
      title="Build on physical-world data that cannot be scraped."
      lead="TRACE is opening an early researcher path for embodied AI teams that need synchronized motion, scene context, timing, and cooperation from ordinary work outside the lab."
    >
      <template #actions>
        <BaseButton to="/request-access?path=researcher">
          Request research access
        </BaseButton>
        <BaseButton to="/well" variant="secondary">
          Explore the WELL
        </BaseButton>
      </template>

      <template #visual>
        <MediaFrame
          src="/media/trace-swarm-dashboard.jpg"
          alt="TRACE swarm dashboard for harvested sensor sessions"
          eyebrow="Research pipeline"
          caption="Early harvest tooling is designed to move synchronized sessions into validated dataset inventory."
          aspect="wide"
        />
      </template>
    </HeroSection>

    <BaseSection>
      <BaseGrid :columns="4" gap="sm">
        <BaseStat
          v-for="item in researchStats"
          :key="item.label"
          :value="item.value"
          :label="item.label"
          :detail="item.detail"
        />
      </BaseGrid>
    </BaseSection>

    <GradientBand>
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <BaseHeading
          eyebrow="The data"
          title="A useful robotics corpus has to preserve the body."
          lead="Language datasets preserve words. Vision datasets preserve pixels. Robotics datasets need the coupled record of movement, environment, task progress, and human timing."
        />

        <BaseGrid :columns="3" gap="md">
          <BaseCard
            v-for="item in dataCards"
            :key="item.title"
            :eyebrow="item.eyebrow"
            :title="item.title"
            :body="item.body"
          />
        </BaseGrid>
      </div>
    </GradientBand>

    <BaseSection
      eyebrow="Research areas"
      title="The first use cases are practical, physical, and cooperative."
      lead="The WELL is most valuable where robots need to work around people, tools, space, and changing context rather than clean benchmark scenes."
    >
      <div class="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <MediaFrame
          src="/media/trace-mmt-board-render.jpg"
          alt="TRACE multimodal module board render"
          eyebrow="Capture hardware"
          caption="The MMT core anchors scene and task capture while body sensors add motion fidelity."
          aspect="wide"
        />

        <div class="grid gap-3 sm:grid-cols-2" data-reveal>
          <div
            v-for="item in useCases"
            :key="item"
            class="rounded-[8px] border border-trace-line bg-white/88 p-4 text-sm font-semibold text-trace-ink shadow-soft"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </BaseSection>

    <BaseSection
      eyebrow="Access path"
      title="Research access starts with fit, not a generic download."
      lead="TRACE matches access to the work being done. That keeps early research useful while respecting contributor accounting, consent boundaries, and deployment licensing."
      tone="soft"
    >
      <DataNetworkFlow />

      <div class="mt-8">
        <BaseGrid :columns="3" gap="lg">
          <BaseCard
            v-for="item in accessSteps"
            :key="item.title"
            :eyebrow="item.eyebrow"
            :title="item.title"
            :body="item.body"
          />
        </BaseGrid>
      </div>
    </BaseSection>

    <section class="bg-trace-ink py-16 text-white sm:py-20">
      <BaseContainer>
        <div class="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <BaseHeading
            eyebrow="Licensing"
            title="Open enough to learn. Structured enough to deploy."
            lead="The access model keeps research and commercial deployment distinct, so the WELL can support early discovery without giving away the economics of production use."
            tone="inverse"
          />

          <BaseGrid :columns="3" gap="md">
            <BaseCard
              v-for="item in licensingCards"
              :key="item.title"
              tone="dark"
              :eyebrow="item.eyebrow"
              :title="item.title"
              :body="item.body"
            />
          </BaseGrid>
        </div>
      </BaseContainer>
    </section>

    <BaseSection
      eyebrow="Questions"
      title="The research path should stay precise."
      lead="Not a magic robotics dataset — a practical, governed corpus that makes hard physical behavior easier to study."
    >
      <BaseGrid :columns="3" gap="lg">
        <BaseCard
          v-for="item in faqs"
          :key="item.title"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :body="item.body"
        />
      </BaseGrid>
    </BaseSection>

    <CtaPanel
      eyebrow="Research access"
      title="Start with the task data your team actually needs."
      lead="Tell TRACE what you are studying, which task categories matter, and whether the work is research-only, pre-revenue, or moving toward deployment."
      primary-label="Request research access"
      primary-to="/request-access?path=researcher"
      secondary-label="Explore the WELL"
      secondary-to="/well"
    />
  </div>
</template>
