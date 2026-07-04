<script setup lang="ts">
const flywheelItems = [
  'Growing dataset',
  'Research adoption',
  'Commercial licensing',
  'Contributor incentives',
]
</script>

<template>
  <div
    class="rounded-trace border border-trace-blue/30 bg-trace-ink p-6 text-white shadow-glow"
    data-reveal
  >
    <p class="text-sm font-semibold uppercase text-trace-cyan">Why it compounds</p>
    <div class="mt-6 grid gap-3 sm:grid-cols-2">
      <div
        v-for="(item, index) in flywheelItems"
        :key="item"
        class="rounded-trace border border-white/10 bg-white/[0.06] p-4"
      >
        <p class="text-xs font-semibold text-trace-cyan">
          {{ String(index + 1).padStart(2, '0') }}
        </p>
        <p class="mt-2 font-display text-lg font-semibold">
          {{ item }}
        </p>
      </div>
    </div>
    <p class="mt-6 text-sm leading-6 text-white/70">
      The wearable can be copied. The aligned contributor network, governed
      corpus, licensing framework, and processing pipeline are much harder to
      recreate once they start reinforcing each other.
    </p>
  </div>
</template>
