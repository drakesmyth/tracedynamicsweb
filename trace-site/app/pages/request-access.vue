<script setup lang="ts">
type AccessPath = 'hardware' | 'researcher' | 'contributor'

const route = useRoute()

const accessPaths: AccessPath[] = ['hardware', 'researcher', 'contributor']

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
    'Request TRACE hardware, contributor onboarding, or WELL research access.',
})

const routingCards = [
  {
    eyebrow: 'Hardware',
    title: 'Join the kit waitlist.',
    body: 'MMT hardware and body-sensor access should match the work setting, sensor fidelity, and onboarding path.',
  },
  {
    eyebrow: 'Research',
    title: 'Start with data fit.',
    body: 'WELL access should begin with the task category, model work, research status, and downstream usage expectations.',
  },
  {
    eyebrow: 'Contributor',
    title: 'Prepare for capture.',
    body: 'Contributor onboarding needs capture modes, consent guidance, validation rules, and a clear path for session credit.',
  },
]

const intakeSteps = [
  {
    value: '01',
    label: 'Path',
    detail: 'Hardware, contributor, and research requests route through one intake.',
  },
  {
    value: '02',
    label: 'Fit',
    detail: 'TRACE can match access to task category, sensor needs, and readiness.',
  },
  {
    value: '03',
    label: 'Handoff',
    detail: 'Your request routes into onboarding so the right team follows up.',
  },
]

useScrollReveal()
</script>

<template>
  <div>
    <HeroSection
      eyebrow="Request access"
      title="Start the right TRACE path."
      lead="Route hardware interest, contributor onboarding, and WELL research access through one intake before checkout or data access opens."
    >
      <template #visual>
        <BrandSignalPanel />
      </template>
    </HeroSection>

    <BaseSection>
      <div class="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div class="order-2 lg:order-1">
          <BaseHeading
            eyebrow="Intake"
            title="Route the request before the product path opens."
            lead="This first step collects intent, not payment — so hardware, research, and contributor conversations start in the right place."
          />

          <div class="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <BaseStat
              v-for="item in intakeSteps"
              :key="item.label"
              :value="item.value"
              :label="item.label"
              :detail="item.detail"
            />
          </div>
        </div>

        <WaitlistForm class="order-1 lg:order-2" :default-path="defaultPath" />
      </div>
    </BaseSection>

    <BaseSection
      eyebrow="Routing"
      title="The same form can serve three early access motions."
      lead="Tell TRACE what you need in one place; final terms, checkout, and data access follow through the right onboarding path."
      tone="soft"
    >
      <BaseGrid :columns="3" gap="lg">
        <BaseCard
          v-for="item in routingCards"
          :key="item.title"
          :eyebrow="item.eyebrow"
          :title="item.title"
          :body="item.body"
        />
      </BaseGrid>
    </BaseSection>

    <CtaPanel
      eyebrow="Still exploring?"
      title="See the hardware and data paths before choosing."
      lead="The request form is the front door, but the product and WELL pages explain what TRACE is building and why access needs structure."
      primary-label="View shop"
      primary-to="/shop"
      secondary-label="Research path"
      secondary-to="/researchers"
    />
  </div>
</template>
