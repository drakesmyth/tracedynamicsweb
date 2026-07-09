<script setup lang="ts">
useSeoMeta({
  title: 'Shop — Coming Soon',
  description:
    'TRACE capture hardware is coming soon. Join the waitlist for MMT capture kits and body-sensor swarms.',
})

const kitPreview = [
  {
    axis: 'MMT core',
    range: 'Gen3 / Gen4',
    detail: 'Chest- or head-mounted scene sensing: wide RGB, depth mapping, audio, barometric anchor, and motion.',
  },
  {
    axis: 'Body swarm',
    range: '6–20 sensors',
    detail: 'Millisecond-synced full-body pose and motion fidelity, scaled by task.',
  },
  {
    axis: 'Baseline kit',
    range: '~$200 target',
    detail: 'Gen3-class core plus six to eight body sensors; commodity parts, built almost anywhere.',
  },
]

useScrollReveal()
</script>

<template>
  <section class="trace-brand-surface border-b border-trace-line">
    <BaseContainer class="relative py-20 sm:py-28">
      <div class="mx-auto max-w-2xl text-center" data-reveal>
        <BasePill tone="cyan">Shop · Coming soon</BasePill>
        <h1
          class="mt-6 font-display text-4xl font-bold leading-tight text-trace-ink sm:text-6xl"
        >
          Capture hardware is coming soon.
        </h1>
        <p class="mt-6 text-base leading-7 text-trace-muted sm:text-xl">
          TRACE kits — an MMT core plus a configurable body-sensor swarm — open to
          approved contributors first, as onboarding, capture guidance, and terms
          come online. Join the waitlist and you are in the first group offered
          hardware.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <BaseButton to="/request-access?path=hardware">
            Join the waitlist
          </BaseButton>
          <BaseButton to="/well" variant="secondary">Explore the WELL</BaseButton>
        </div>
      </div>

      <div class="mx-auto mt-14 grid max-w-3xl gap-3" data-reveal>
        <div
          v-for="row in kitPreview"
          :key="row.axis"
          class="trace-card rounded-trace border border-trace-line p-4 shadow-soft"
        >
          <div class="grid gap-2 sm:grid-cols-[0.7fr_0.8fr_1.5fr] sm:items-start">
            <p class="text-xs font-semibold uppercase text-trace-muted">
              {{ row.axis }}
            </p>
            <p class="font-display text-lg font-semibold text-trace-blue">
              {{ row.range }}
            </p>
            <p class="text-sm leading-6 text-trace-muted">
              {{ row.detail }}
            </p>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
