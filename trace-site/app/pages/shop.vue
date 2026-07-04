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
    detail: 'Target for V3.5-class core plus six to eight sensors.',
  },
  {
    value: 'Waitlist',
    label: 'current status',
    detail: 'Checkout opens after hardware access, onboarding, and terms are ready.',
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
    eyebrow: 'Available now',
    title: 'Product intent and waitlist.',
    body: 'The site can explain kit paths, collect early interest through the contributor flow, and set expectations before checkout opens.',
  },
  {
    eyebrow: 'Next',
    title: 'Hardware access and onboarding.',
    body: 'TRACE still needs contributor onboarding, capture-mode guidance, availability windows, and legal terms before paid checkout is responsible.',
  },
  {
    eyebrow: 'Later',
    title: 'Shopify checkout.',
    body: 'The API layer is already in place, but live products and checkout should wait for Shopify credentials and finalized product schema.',
  },
]

const faqs = [
  {
    eyebrow: 'Can I buy today?',
    title: 'Not yet. This is a waitlist surface.',
    body: 'The public shop is ready for hardware interest, but checkout should stay closed until inventory, onboarding, capture rules, and terms are finalized.',
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
      lead="The shop should make the hardware access model clear without pretending checkout is live. These are the first hardware pathways TRACE needs to support."
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
      lead="TRACE hardware creates data with privacy, consent, and contributor-accounting implications. The first shop experience should route people into the right path before payment."
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
          eyebrow="Checkout status"
          title="The storefront is ready before commerce is live."
          lead="That is intentional. The page can set hardware expectations now, then connect to Shopify once product schema, inventory, pricing, and terms are finalized."
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
      lead="This shop is a product surface, not a live cart. It should answer the questions that matter before people join the hardware path."
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
