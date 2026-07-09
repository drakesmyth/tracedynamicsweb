<script setup lang="ts">
useSeoMeta({
  title: 'Team',
  description:
    'The small, founder-led team building TRACE Dynamics — the capture hardware, the WELL corpus, and the contributor network.',
})

const team = [
  { name: 'Cliff', role: 'CEO / Engineer', photo: '/media/team-cliff.png' },
  { name: 'Drake', role: 'COO / Engineer', photo: '/media/team-drake.png' },
  { name: 'Oscar', role: 'CTO / Software Engineer', photo: '/media/team-oscar.jpg' },
  { name: 'Elena', role: 'CMO / Media Coordinator', photo: '/media/team-elena.png' },
]

useScrollReveal()
</script>

<template>
  <div>
    <BaseSection
      eyebrow="Team"
      title="Who is behind TRACE."
      lead="TRACE is a small, founder-led team building the whole stack end to end — capture hardware, firmware, the WELL corpus, and the contributor network."
    >
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <figure
          v-for="member in team"
          :key="member.name"
          class="text-center"
          data-reveal
        >
          <div
            class="mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-trace border border-trace-line bg-trace-cloud shadow-soft"
          >
            <img
              :src="member.photo"
              :alt="member.name"
              class="h-full w-full object-cover"
              loading="lazy"
            >
          </div>
          <figcaption class="mt-4">
            <p class="font-display text-lg font-semibold text-trace-ink">
              {{ member.name }}
            </p>
            <p class="mt-1 text-sm text-trace-muted">
              {{ member.role }}
            </p>
          </figcaption>
        </figure>
      </div>
    </BaseSection>

    <CtaPanel
      eyebrow="Join us"
      title="Help build the data layer robots learn from."
      lead="Contributors record the work; researchers build on it. Both start from one request."
      primary-label="Request access"
      primary-to="/request-access"
      secondary-label="Explore the WELL"
      secondary-to="/well"
    />
  </div>
</template>
