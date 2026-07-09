<script setup lang="ts">
useSeoMeta({
  title: 'TRACE Dynamics',
  description:
    'TRACE Dynamics is building the missing data layer for robots that work with people.',
})

const heroStats = [
  {
    value: '15–25 cm',
    label: 'the gap we close',
    detail: 'How far video-estimated pose drifts from measured ground truth per joint. TRACE measures kinematics directly.',
  },
  {
    value: '6 PB',
    label: 'per million hours',
    detail: 'Synchronized video, depth mapping, audio, and measured kinematics on Gen3 — roughly 10× that on Gen4.',
  },
  {
    value: '6–20',
    label: 'body sensors',
    detail: 'A body-worn swarm for full-body pose, synchronized to the millisecond.',
  },
  {
    value: '~$200',
    label: 'baseline kit',
    detail: 'Deliberately commodity parts, sourced and built almost anywhere electronics are made.',
  },
]

const capabilities = [
  {
    title: 'Measured',
    body: 'Body motion read directly from worn sensors — not estimated from video.',
  },
  {
    title: 'In the wild',
    body: 'Real work in real spaces, not staged lab sets or mocap studios.',
  },
  {
    title: 'Multimodal',
    body: 'Motion, depth mapping, video, and audio, synchronized to the millisecond.',
  },
  {
    title: 'Open',
    body: 'Free for research, licensed for commercial — a corpus, not a captive silo.',
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
    eyebrow: 'Hardware',
    title: 'The robots are here.',
    body: 'Humanoid chassis with increasingly capable manipulation and locomotion are now built by a wide range of manufacturers. The bodies exist; the training data does not.',
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
      lead="TRACE records how people actually move, work, and cooperate in real spaces: the synchronized motion, depth mapping, video, and audio data the next generation of robots needs and no one can scrape."
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

    <BaseSection
      eyebrow="The difference"
      title="Video guesses where your body is. We measure it."
      lead="Pose inferred from video drifts 15–25 cm per joint. TRACE reads body motion directly from worn sensors, so the record sits where the movement actually happened."
    >
      <div class="mx-auto max-w-2xl">
        <AccuracyContrast />
      </div>
    </BaseSection>

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

    <BaseSection
      eyebrow="What makes it different"
      title="Measured. In the wild. Multimodal. Open."
    >
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="item in capabilities" :key="item.title" data-reveal>
          <div class="h-1 w-10 rounded-full" style="background: var(--trace-brand-gradient)" />
          <h3 class="mt-4 font-display text-xl font-semibold text-trace-ink">
            {{ item.title }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-trace-muted">
            {{ item.body }}
          </p>
        </div>
      </div>
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
      lead="Capital is treating humanoid robotics as a platform shift, the data lesson from language and vision is settled, and capable robot chassis are finally shipping from a wide range of makers."
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
      lead="Real-world capture carries privacy, consent, and quality risk. TRACE handles that through capture modes, contributor guidance, and validation gates before any session earns credit."
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
          lead="Contributors turn everyday work into verified training data; researchers build on a corpus that cannot be scraped. Both start from the same access path."
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
