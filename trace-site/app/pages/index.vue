<script setup lang="ts">
useSeoMeta({
  title: 'TRACE Dynamics',
  description:
    'TRACE Dynamics is building the missing data layer for robots that work with people.',
})

const heroStats = [
  {
    value: 'MMT',
    label: 'core unit',
    detail: 'Chest- or head-mounted multimodal scene capture.',
  },
  {
    value: '6-20',
    label: 'body sensors',
    detail: 'Millisecond-synced pose and motion fidelity.',
  },
  {
    value: '7/7',
    label: 'device harvest',
    detail: 'Field-tested swarm collection and upload workflow.',
  },
  {
    value: 'Early',
    label: 'research path',
    detail: 'Fit-first access for research and pre-revenue development.',
  },
]

const problemCards = [
  {
    eyebrow: 'Language',
    title: 'Text models had the internet.',
    body: 'Language models learned from a massive public record of human writing, links, and documents.',
  },
  {
    eyebrow: 'Vision',
    title: 'Vision models had images.',
    body: 'Photos and video gave vision systems a broad training substrate for recognizing the world.',
  },
  {
    eyebrow: 'Robotics',
    title: 'Robots have no equivalent.',
    body: 'Robots need physical human task data: movement, tools, timing, contact, space, and cooperation.',
  },
]

const whyNowCards = [
  {
    eyebrow: 'Capital',
    title: 'The money arrived.',
    body: 'Humanoid robotics is funded like a platform shift, but hardware alone does not teach robots how people actually work.',
  },
  {
    eyebrow: 'Data',
    title: 'The lesson is settled.',
    body: 'Across language and vision, more real-world data beat cleverer architectures again and again.',
  },
  {
    eyebrow: 'Sensors',
    title: 'The parts got cheap.',
    body: 'Industrial-grade motion sensors, radios, depth cameras, and batteries are now commodity parts.',
  },
]

const workflowSteps = [
  {
    eyebrow: '01',
    title: 'Wear the kit',
    body: 'A light multimodal core pairs with a small body-sensor swarm for pose, motion, audio, and environment capture.',
  },
  {
    eyebrow: '02',
    title: 'Record real work',
    body: 'Contributors capture ordinary sessions in real spaces, not staged lab sets or narrow mocap studio routines.',
  },
  {
    eyebrow: '03',
    title: 'Verify and govern',
    body: 'Sessions pass quality, consent, sync, and metadata checks before they become useful dataset inventory.',
  },
  {
    eyebrow: '04',
    title: 'License the WELL',
    body: 'Researchers and builders access governed data, while contributors retain a stake in the value they create.',
  },
]

const wellPoints = [
  'In-the-wild human task data',
  'Multimodal capture streams',
  'Contributor-aligned economics',
  'Research-friendly access path',
]

const validationCards = [
  {
    eyebrow: 'Quality',
    title: 'Only useful sessions count.',
    body: 'Uploaded hours are graded for sync, completeness, signal quality, and eligible task capture before they enter the WELL.',
  },
  {
    eyebrow: 'Fraud',
    title: 'Low-effort data is rejected.',
    body: 'Replay, synthetic, duplicated, or non-compliant capture can be filtered before it earns contributor credit.',
  },
  {
    eyebrow: 'Privacy',
    title: 'Capture modes matter.',
    body: 'Contributors choose session settings and remain responsible for local consent rules; TRACE supplies controls, guidance, and validation gates.',
  },
]

const audienceCards = [
  {
    tone: 'brand' as const,
    eyebrow: 'Contributors',
    title: 'Own a share of the data robots need.',
    body: 'TRACE turns useful daily work into verified training data, with contributors participating in the upside instead of disappearing into the supply chain.',
    to: '/request-access?path=contributor',
    label: 'Request access',
  },
  {
    tone: 'plain' as const,
    eyebrow: 'Researchers',
    title: 'Build on data that cannot be scraped.',
    body: 'The WELL gives embodied AI researchers a governed path toward physical-world behavior data, not another synthetic benchmark.',
    to: '/request-access?path=researcher',
    label: 'Request access',
  },
]

useScrollReveal()
</script>

<template>
  <div>
    <HeroSection
      eyebrow="The missing data layer for embodied AI"
      title="Robots have bodies. They do not have experience."
      lead="TRACE records how people actually move, work, and cooperate in real spaces: the synchronized motion, depth, video, and audio data the next generation of robots needs and no one can scrape."
    >
      <template #actions>
        <BaseButton to="/request-access?path=contributor">
          Become a contributor
        </BaseButton>
        <BaseButton to="/request-access?path=researcher" variant="secondary">
          Access the data
        </BaseButton>
      </template>

      <template #visual>
        <figure
          class="trace-card w-full max-w-xl rounded-trace border border-trace-line p-3 shadow-glow"
        >
          <div class="aspect-[16/10] overflow-hidden rounded-[6px] bg-trace-ink">
            <img
              src="/media/trace-mmt-board-render.jpg"
              alt="TRACE MMT board render"
              class="h-full w-full object-contain"
              loading="eager"
            >
          </div>
          <figcaption class="grid gap-3 px-1 py-4 sm:grid-cols-3">
            <BasePill tone="blue">Hardware</BasePill>
            <BasePill tone="cyan">Sensor sync</BasePill>
            <BasePill tone="green">Field data</BasePill>
          </figcaption>
        </figure>
      </template>
    </HeroSection>

    <BaseSection>
      <BaseGrid :columns="4" gap="sm">
        <BaseStat
          v-for="item in heroStats"
          :key="item.label"
          :value="item.value"
          :label="item.label"
          :detail="item.detail"
        />
      </BaseGrid>
    </BaseSection>

    <GradientBand>
      <div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <BaseHeading
          eyebrow="The problem"
          title="Robots do not have a Common Crawl."
          lead="Language models had the internet. Vision models had billions of images. Robots need the missing record of physical human work: movement, tools, timing, contact, space, and cooperation."
        />

        <BaseGrid :columns="3" gap="md">
          <BaseCard
            v-for="item in problemCards"
            :key="item.title"
            :eyebrow="item.eyebrow"
            :title="item.title"
            :body="item.body"
          />
        </BaseGrid>
      </div>
    </GradientBand>

    <BaseSection
      eyebrow="Why now"
      title="Three things became true at once."
      lead="The robotics market is moving, the AI playbook is obvious, and the capture hardware is finally cheap enough to scale outside the lab."
    >
      <BaseGrid :columns="3" gap="lg">
        <BaseCard
          v-for="item in whyNowCards"
          :key="item.title"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :body="item.body"
        />
      </BaseGrid>
    </BaseSection>

    <BaseSection
      eyebrow="The product"
      title="One core unit. Motion fidelity you scale."
      lead="Every kit is built around the MMT, then configured with a body-worn sensor swarm. The result is synchronized scene context and full-body motion without a studio."
    >
      <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <ProductConfigPanel />
        <MediaFrame
          src="/media/trace-hardware-field-photo.jpeg?v=2"
          alt="TRACE hardware board with sensor connections"
          eyebrow="Built hardware"
          caption="Prototype capture hardware with real sensor, storage, power, and camera connections."
          fit="contain"
          aspect="wide"
        />
      </div>
    </BaseSection>

    <BaseSection
      eyebrow="How it works"
      title="Ordinary work becomes training data."
      lead="The network path is intentionally simple: people capture eligible sessions, TRACE validates the data products, and the WELL becomes a governed corpus for behavior models."
      tone="soft"
    >
      <DataNetworkFlow />
      <AnimatedDivider />
      <BaseGrid :columns="4" gap="md">
        <BaseCard
          v-for="item in workflowSteps"
          :key="item.title"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :body="item.body"
        />
      </BaseGrid>
    </BaseSection>

    <section class="bg-trace-ink py-16 text-white sm:py-20">
      <BaseContainer>
        <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <BaseHeading
              eyebrow="The WELL"
              title="A governed corpus for robots that work with humans."
              lead="The WELL is TRACE's in-the-wild human-task corpus: raw enough to preserve future training value, structured enough to trust, and built around the people who create it."
              tone="inverse"
            />

            <div class="mt-8 flex flex-wrap gap-2" data-reveal>
              <BasePill
                v-for="point in wellPoints"
                :key="point"
                tone="cyan"
              >
                {{ point }}
              </BasePill>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <BaseCard
              tone="dark"
              eyebrow="Data products"
              title="Cooperative task packages."
              body="Manipulation, handoff, human-proximity navigation, and workspace-sharing data for policy training."
            />
            <BaseCard
              tone="dark"
              eyebrow="Access"
              title="Open for research, licensed for deployment."
              body="Research, non-commercial work, and product development can build on the WELL; commercial deployment requires a license."
            />
          </div>
        </div>
      </BaseContainer>
    </section>

    <BaseSection
      eyebrow="Built today"
      title="The capture stack already exists."
      lead="Working boards, firmware, device provisioning, session harvest, and local upload tooling are already moving through field tests. The hard next step is scale."
    >
      <div class="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <FlywheelPanel />

        <div class="grid gap-5">
          <MediaFrame
            src="/media/trace-swarm-dashboard.jpg"
            alt="TRACE swarm status dashboard showing seven devices harvested"
            eyebrow="Pipeline"
            caption="Swarm collection dashboard showing completed harvest across seven devices."
            aspect="wide"
          />
          <BaseCard
            tone="brand"
            eyebrow="Pipeline"
            title="Raw capture becomes governed inventory."
            body="The processing path is designed for validation, grading, labeling, accounting, and access control before data is used downstream."
          />
        </div>
      </div>
    </BaseSection>

    <BaseSection
      eyebrow="Validation"
      title="Governance starts before data earns credit."
      lead="The public story should be honest: real-world capture brings privacy, consent, and quality risk. TRACE handles that through capture modes, contributor guidance, and validation gates."
      tone="soft"
    >
      <BaseGrid :columns="3" gap="lg">
        <BaseCard
          v-for="item in validationCards"
          :key="item.title"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :body="item.body"
        />
      </BaseGrid>
    </BaseSection>

    <BaseSection>
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <BaseHeading
          eyebrow="Who it is for"
          title="Contributors create the corpus. Researchers build with it."
          lead="TRACE has two primary audiences on the public site. The homepage should make both paths obvious without splitting the story too early."
        />

        <BaseGrid :columns="2" gap="lg">
          <BaseCard
            v-for="item in audienceCards"
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
      </div>
    </BaseSection>

    <CtaPanel
      eyebrow="Join the build"
      title="Help create the data layer robots cannot scrape."
      lead="TRACE is building a practical path from real human work to governed embodied-AI training data. Contributors, researchers, and builders can plug into the system as it scales."
      primary-label="Request access"
      primary-to="/request-access"
      secondary-label="Research access"
      secondary-to="/request-access?path=researcher"
    />
  </div>
</template>
