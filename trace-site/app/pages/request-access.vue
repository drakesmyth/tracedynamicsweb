<script setup lang="ts">
type AccessPath =
  | 'hardware'
  | 'researcher'
  | 'contributor'
  | 'media'
  | 'industry'

const route = useRoute()

const accessPaths: AccessPath[] = [
  'hardware',
  'researcher',
  'contributor',
  'media',
  'industry',
]

const isAccessPath = (value: unknown): value is AccessPath =>
  typeof value === 'string' && accessPaths.includes(value as AccessPath)

const defaultPath = computed<AccessPath>(() => {
  const value = route.query.path
  const candidate = Array.isArray(value) ? value[0] : value

  return isAccessPath(candidate) ? candidate : 'hardware'
})

useSeoMeta({
  title: 'Request Access',
  description:
    'Contribute your work, access the WELL for research, or join the hardware waitlist. One request, routed the right way.',
})

const steps = [
  {
    eyebrow: '01',
    title: 'Request access',
    body: 'Tell us who you are and how you want in. It takes about three minutes.',
  },
  {
    eyebrow: '02',
    title: 'We review',
    body: 'A person reviews your request and follows up as access opens in waves.',
  },
  {
    eyebrow: '03',
    title: 'Get set up',
    body: 'Contributors receive a kit and onboarding, researchers sign the data license, hardware requests join the waitlist.',
  },
  {
    eyebrow: '04',
    title: 'Start',
    body: 'Record work and earn as the data licenses, or download the WELL for your research.',
  },
]

const faqs: {
  eyebrow: string
  title: string
  body: string
  to?: string
  linkLabel?: string
}[] = [
  {
    eyebrow: 'Is this real?',
    title: 'Who is behind TRACE?',
    body: 'A small, founder-led team building the whole stack end to end — capture hardware, firmware, the WELL corpus, and the contributor network. That stack is already built and proven in multi-device field testing; the work now is scaling contributors.',
    to: '/team',
    linkLabel: 'Meet the team',
  },
  {
    eyebrow: 'Payment',
    title: 'How and when do contributors get paid?',
    body: 'You earn a share of the licensing revenue the dataset generates, in proportion to your verified contribution, for as long as the data keeps earning. Issuance is front-loaded, so the earliest contributors hold the largest share. Exact terms are set during onboarding.',
  },
  {
    eyebrow: 'Privacy',
    title: 'What is captured, and how is my privacy protected?',
    body: 'You control what each session records. TRACE supplies consent-aware capture modes and guidance, and only sessions that pass automated quality, fraud, and capture-policy checks enter the corpus. The data is valued for physical behavior, not the identities of the people in it.',
  },
  {
    eyebrow: 'Licensing',
    title: 'What needs a commercial license?',
    body: 'Research, non-commercial work, and product development can use the WELL for free. A commercial license applies only when a resulting model or dataset is sold or deployed commercially.',
  },
  {
    eyebrow: 'Hardware',
    title: 'What does the kit cost, and when can I get one?',
    body: 'A baseline kit — an MMT core plus six to eight body sensors — targets about $200. Hardware opens to approved contributors first; join the waitlist and you are in the first group offered kits.',
  },
  {
    eyebrow: 'Obligation',
    title: 'Is there any obligation?',
    body: 'None. No minimum, no schedule, no lock-in — you contribute the sessions you want, when they fit your work. And because your share tracks what you actually contribute, more hours simply means more earning.',
  },
]

useScrollReveal()
</script>

<template>
  <div>
    <HeroSection
      eyebrow="Request access"
      title="Help build the data layer for robots that work with people."
      lead="TRACE is an open, in-the-wild record of how people move, work, and cooperate — the training data behind robots that share our spaces. Tell us how you want in."
    >
      <template #visual>
        <BrandSignalPanel />
      </template>
    </HeroSection>

    <BaseSection>
      <div class="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div class="order-2 lg:order-1">
          <BaseHeading
            eyebrow="What this is"
            title="An open corpus of real human work."
            lead="Not staged demos — people doing real jobs, captured with a chest- or head-mounted core plus 6–20 body sensors, so behavior models learn how humans actually move and cooperate. Free for research. Licensed for commercial use. Contributors share the revenue."
          />

          <div class="mt-8 flex flex-wrap gap-2" data-reveal>
            <BasePill tone="cyan">In-the-wild data</BasePill>
            <BasePill tone="blue">Free for researchers</BasePill>
            <BasePill tone="green">Contributors paid</BasePill>
            <BasePill tone="cyan">Privacy by design</BasePill>
          </div>

          <p class="mt-8 text-sm leading-6 text-trace-muted" data-reveal>
            After you submit, you get a confirmation right away and a real reply
            from a person as access opens — not an autoresponder loop. Your details
            are only used to follow up about access.
          </p>
        </div>

        <WaitlistForm
          class="order-1 lg:order-2"
          :default-path="defaultPath"
          title="Request access"
          lead="Name, email, and how you want in. It takes about three minutes."
        />
      </div>
    </BaseSection>

    <BaseSection
      eyebrow="How it works"
      title="From request to first data."
      lead="The same simple path, whichever way you join."
    >
      <BaseGrid :columns="4" gap="md">
        <BaseCard
          v-for="item in steps"
          :key="item.title"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :body="item.body"
        />
      </BaseGrid>
    </BaseSection>

    <BaseSection
      eyebrow="Questions"
      title="The things worth knowing before you ask."
      lead="Straight answers on who we are, how contributors are paid, and how the data is governed."
      tone="soft"
    >
      <BaseGrid :columns="3" gap="lg">
        <BaseCard
          v-for="item in faqs"
          :key="item.title"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :body="item.body"
        >
          <template v-if="item.to" #footer>
            <NuxtLink
              :to="item.to"
              class="text-sm font-semibold text-trace-blue transition hover:text-trace-cyan"
            >
              {{ item.linkLabel }} →
            </NuxtLink>
          </template>
        </BaseCard>
      </BaseGrid>
    </BaseSection>

    <CtaPanel
      eyebrow="Not sure yet?"
      title="See what you would be joining."
      lead="The WELL and contributor pages explain what TRACE captures, how the data is governed, and how contributors share in what it earns."
      primary-label="Explore the WELL"
      primary-to="/well"
      secondary-label="For researchers"
      secondary-to="/researchers"
    />
  </div>
</template>
