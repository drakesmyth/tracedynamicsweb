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
    value: '6 PB+',
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
    body: 'Humanoid robotics is funded like a platform shift, but hardware alone does not teach robots how people work.',
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
    body: 'The WELL gives embodied AI researchers real physical-world behavior data to build on.',
    to: '/request-access?path=researcher',
    label: 'Request access',
  },
]

const wornStrip = [
  { src: '/media/trace-work-construction.jpg', label: 'Trades & construction', alt: 'A person wearing the TRACE kit walking through a construction site' },
  { src: '/media/trace-work-reach.jpg', label: 'Stocking & picking', alt: 'A person wearing the TRACE kit reaching for a box on a warehouse shelf' },
  { src: '/media/trace-work-lifting.jpg', label: 'Lifting & moving', alt: 'A person wearing the TRACE kit lifting a box from a pallet in a warehouse' },
  { src: '/media/trace-work-diy.jpg', label: 'Repair & assembly', alt: 'A person wearing the TRACE kit drilling at a home workbench' },
  { src: '/media/trace-work-home.jpg', label: 'Home & everyday', alt: 'A person wearing the TRACE kit tidying toys into a basket at home' },
]

useScrollReveal()
</script>

<template>
  <div>
    <HeroSection
      eyebrow="The missing data layer for embodied AI"
      title="Robots are here. They need experience."
      lead="TRACE records how people move, work, and cooperate in real spaces: the synchronized motion, depth mapping, video, and audio data the next generation of robots needs and no one can scrape."
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
          <div class="aspect-[4/5] overflow-hidden rounded-[6px] bg-trace-ink">
            <img
              src="/media/trace-hero.jpg"
              alt="A construction worker in a hard hat wearing the full TRACE kit — MMT on the helmet and chest, LMT motion sensors on arms, belt, and legs — walking a job site with blueprints"
              class="h-full w-full object-cover"
              loading="eager"
            >
          </div>
          <figcaption class="grid gap-3 px-1 py-4 sm:grid-cols-3">
            <BasePill tone="blue">Real work</BasePill>
            <BasePill tone="cyan">In the wild</BasePill>
            <BasePill tone="green">Low-profile</BasePill>
          </figcaption>
        </figure>
      </template>
    </HeroSection>

    <BaseSection
      eyebrow="The difference"
      title="Measured motion data, not video pose estimates."
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
      eyebrow="How it works"
      title="Ordinary work becomes training data."
      lead="The path is direct: people record eligible sessions with fully instrumented, egocentric capture — what the wearer sees, plus how their body actually moves — TRACE validates them, and the WELL becomes the corpus behavior models train on."
      tone="soft"
    >
      <DataNetworkFlow />
    </BaseSection>

    <BaseSection
      eyebrow="Worn during real work"
      title="One kit, every kind of work."
      lead="The same light rig rides along through lifting, reaching, assembly, and everything in between — capturing how people move on the job."
    >
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <figure
          v-for="shot in wornStrip"
          :key="shot.src"
          class="overflow-hidden rounded-trace border border-trace-line shadow-soft"
          data-reveal
        >
          <div class="aspect-[3/4] overflow-hidden bg-trace-ink">
            <img
              :src="shot.src"
              :alt="shot.alt"
              class="h-full w-full object-cover"
              loading="lazy"
            >
          </div>
          <figcaption class="bg-white px-3 py-2 text-sm font-semibold text-trace-ink">
            {{ shot.label }}
          </figcaption>
        </figure>
      </div>
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
            src="/media/trace-hardware-boards.jpg"
            alt="The built TRACE hardware — the MMT board with camera, sensors, storage, and radio, and two LMT motion-sensor boards"
            eyebrow="The hardware"
            caption="The MMT and LMT boards — camera, motion sensors, storage, and radio — built and field-tested today."
            aspect="wide"
          />
          <MediaFrame
            src="/media/trace-hardware-lmt.jpg"
            alt="A single TRACE LMT motion-sensor board next to a pen for scale"
            eyebrow="Actual size"
            caption="One LMT motion sensor next to a pen — a finished board, small enough to wear anywhere."
            aspect="wide"
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
          lead="Contributors turn everyday work into verified training data; researchers build on real behavior no one else has. Both start from the same access path."
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
      lead="TRACE is building a practical path from real human work to training data for embodied AI. Contributors, researchers, and builders can plug into the system as it scales."
      primary-label="Request access"
      primary-to="/request-access"
      secondary-label="Research access"
      secondary-to="/request-access?path=researcher"
    />
  </div>
</template>
