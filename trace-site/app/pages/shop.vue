<script setup lang="ts">
import { hardwareProducts } from '~/data/hardwareCatalog'

useSeoMeta({
  title: 'Shop',
  description:
    'Join the TRACE hardware waitlist for MMT capture kits, body sensors, and contributor hardware access.',
})

const shopStats = [
  {
    value: 'MMT',
    label: 'required core',
    detail: 'The multimodal module anchors scene, audio, motion, and task context.',
  },
  {
    value: '6-20',
    label: 'sensor range',
    detail: 'Body-worn sensors scale motion fidelity by kit configuration.',
  },
  {
    value: '~$200',
    label: 'baseline target',
    detail: 'Gen3-class core plus six to eight body sensors.',
  },
  {
    value: 'Waitlist',
    label: 'current status',
    detail: 'Kits open to approved contributors as onboarding and terms come online.',
  },
]

const kitSteps = [
  {
    eyebrow: '01',
    title: 'Join the hardware path.',
    body: 'Start through the contributor route so kit access can match your work setting, capture needs, and onboarding requirements.',
  },
  {
    eyebrow: '02',
    title: 'Configure the kit.',
    body: 'The MMT core is required. Sensor count scales from a baseline body swarm to higher-fidelity capture configurations.',
  },
  {
    eyebrow: '03',
    title: 'Record eligible sessions.',
    body: 'Useful data comes from real work: bench tasks, tools, handoffs, movement, shared space, and ordinary timing.',
  },
  {
    eyebrow: '04',
    title: 'Upload for validation.',
    body: 'Only compliant, synced, useful sessions become WELL inventory or earn contributor accounting credit.',
  },
]

const readinessCards = [
  {
    eyebrow: 'Now',
    title: 'Join the waitlist.',
    body: 'Tell TRACE what work you can capture and which kit fits. Approved contributors are onboarded first.',
  },
  {
    eyebrow: 'Next',
    title: 'Onboarding and capture guidance.',
    body: 'Contributors receive capture modes, consent guidance, and validation rules before recording sessions that count.',
  },
  {
    eyebrow: 'Later',
    title: 'Direct kit checkout.',
    body: 'Once kits, pricing, and terms are finalized, hardware becomes available to onboarded contributors directly.',
  },
]

const faqs = [
  {
    eyebrow: 'Can I buy today?',
    title: 'Not yet. This is a waitlist surface.',
    body: 'Not yet. Kits open to onboarded contributors once inventory, capture rules, and terms are finalized. The waitlist is how you get in line.',
  },
  {
    eyebrow: 'What is required?',
    title: 'Every contributor kit starts with the MMT.',
    body: 'The MMT is the scene and task anchor. Body sensors add motion fidelity depending on the work and the level of capture needed.',
  },
  {
    eyebrow: 'Who is this for?',
    title: 'Early contributors and research partners.',
    body: 'The first hardware path should prioritize people who can create useful, compliant, real-world task sessions for the WELL.',
  },
]

useScrollReveal()
</script>

<template>
  <div>
    <HeroSection
      eyebrow="Shop"
      title="Hardware for turning real work into robot training data."
      lead="TRACE kits are not generic cameras. They are capture systems for contributors: an MMT core, configurable body sensors, and a validation path into the WELL."
    >
      <template #actions>
        <BaseButton to="/request-access?path=hardware">
          Join hardware waitlist
        </BaseButton>
        <BaseButton to="/well" variant="secondary">See the data path</BaseButton>
      </template>

      <template #visual>
        <ProductConfigPanel />
      </template>
    </HeroSection>

    <BaseSection>
      <BaseGrid :columns="4" gap="sm">
        <BaseStat
          v-for="item in shopStats"
          :key="item.label"
          :value="item.value"
          :label="item.label"
          :detail="item.detail"
        />
      </BaseGrid>
    </BaseSection>

    <BaseSection
      eyebrow="Hardware paths"
      title="Start with the kit. Scale motion fidelity as the work demands."
      lead="Kits scale from a baseline configuration up as the work demands. These are the first hardware paths open to contributors."
      tone="soft"
    >
      <div class="grid gap-6 lg:grid-cols-3">
        <article
          v-for="product in hardwareProducts"
          :key="product.title"
          class="trace-card rounded-trace border border-trace-line p-3 shadow-soft"
          data-reveal
        >
          <div class="aspect-[16/10] overflow-hidden rounded-[6px] bg-trace-ink">
            <img
              :src="product.image"
              :alt="product.alt"
              :class="[
                'h-full w-full',
                product.imageFit === 'contain' ? 'object-contain' : 'object-cover',
              ]"
              loading="lazy"
            >
          </div>

          <div class="p-3">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <p class="text-xs font-semibold uppercase text-trace-blue">
                {{ product.eyebrow }}
              </p>
              <BasePill tone="green">{{ product.status }}</BasePill>
            </div>

            <h2 class="mt-3 font-display text-2xl font-semibold leading-tight text-trace-ink">
              {{ product.title }}
            </h2>
            <p class="mt-2 font-display text-lg font-semibold text-trace-blue">
              {{ product.price }}
            </p>
            <p class="mt-3 text-sm leading-6 text-trace-muted">
              {{ product.summary }}
            </p>

            <ul class="mt-5 grid gap-2">
              <li
                v-for="item in product.includes"
                :key="item"
                class="flex items-center gap-2 text-sm font-medium text-trace-ink"
              >
                <span
                  class="h-2 w-2 shrink-0 rounded-full bg-trace-green"
                  aria-hidden="true"
                />
                {{ item }}
              </li>
            </ul>

            <div class="mt-6 flex flex-wrap gap-3">
              <BaseButton :to="`/product/${product.slug}`" variant="secondary">
                View details
              </BaseButton>
              <BaseButton :to="product.primaryTo" variant="ghost">
                {{ product.primaryLabel }}
              </BaseButton>
            </div>
          </div>
        </article>
      </div>
    </BaseSection>

    <BaseSection
      eyebrow="How buying starts"
      title="Access should follow onboarding, not impulse checkout."
      lead="TRACE hardware creates data with privacy, consent, and contributor-accounting implications, so access routes you into the right path before any payment."
    >
      <BaseGrid :columns="4" gap="md">
        <BaseCard
          v-for="item in kitSteps"
          :key="item.title"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :body="item.body"
        />
      </BaseGrid>
    </BaseSection>

    <GradientBand>
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <BaseHeading
          eyebrow="Rollout"
          title="Access opens to contributors first."
          lead="Kits go live as onboarding, capture guidance, and terms come online. Join the waitlist now and you are in the first group offered hardware."
        />

        <BaseGrid :columns="3" gap="md">
          <BaseCard
            v-for="item in readinessCards"
            :key="item.title"
            :eyebrow="item.eyebrow"
            :title="item.title"
            :body="item.body"
          />
        </BaseGrid>
      </div>
    </GradientBand>

    <BaseSection
      eyebrow="FAQ"
      title="Clear expectations make the waitlist stronger."
      lead="A few things worth knowing before you join the hardware waitlist."
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
      eyebrow="Hardware waitlist"
      title="Join the path for early TRACE capture hardware."
      lead="The next useful step is contributor onboarding: matching hardware access to real work, capture settings, validation, and the WELL."
      primary-label="Join hardware waitlist"
      primary-to="/request-access?path=hardware"
      secondary-label="Researcher path"
      secondary-to="/researchers"
    />
  </div>
</template>
