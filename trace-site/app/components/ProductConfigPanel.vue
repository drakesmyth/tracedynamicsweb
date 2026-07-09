<script setup lang="ts">
const configRows = [
  {
    axis: 'MMT core',
    range: 'Gen3 / Gen4',
    detail:
      'Chest- or head-mounted scene sensing: wide RGB, depth, audio, barometric anchor, and motion.',
  },
  {
    axis: 'Body swarm',
    range: '6–20 sensors',
    detail:
      'Pose and motion fidelity for how a person moves, works, and shares space with others.',
  },
  {
    axis: 'Baseline kit',
    range: '~$200 target',
    detail:
      'Gen3-class core plus six to eight body sensors; higher configurations scale with sensor count and MMT generation.',
  },
]
</script>

<template>
  <div
    class="trace-card rounded-trace border border-trace-line p-5 shadow-glow"
    data-reveal
  >
    <div class="flex items-start justify-between gap-6">
      <div>
        <p class="text-sm font-semibold uppercase text-trace-blue">The kit</p>
        <h3 class="mt-2 font-display text-2xl font-semibold text-trace-ink">
          One core unit. Motion fidelity you scale.
        </h3>
      </div>
      <TraceMark class="h-12 w-12 shrink-0" />
    </div>

    <div class="mt-6 grid gap-3">
      <div
        v-for="row in configRows"
        :key="row.axis"
        class="rounded-trace border border-trace-line bg-white/82 p-4"
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
  </div>
</template>

