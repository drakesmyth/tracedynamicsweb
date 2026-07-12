<script setup lang="ts">
const flywheelItems = [
  {
    title: 'Growing dataset',
    detail: 'Each recorded hour makes every earlier hour worth more.',
  },
  {
    title: 'Research adoption',
    detail: 'Free for researchers — their published work pulls in commercial teams.',
  },
  {
    title: 'Commercial licensing',
    detail: 'Deployment fees flow back to TRACE and the people who built the data.',
  },
  {
    title: 'Contributor incentives',
    detail: 'Contributors earn for as long as the data earns — so they keep producing.',
  },
]
</script>

<template>
  <div
    class="flex h-full flex-col rounded-trace border border-trace-blue/30 bg-trace-ink p-6 text-white shadow-glow"
    data-reveal
  >
    <p class="text-sm font-semibold uppercase text-trace-cyan">Why it compounds</p>
    <div class="mt-6 grid flex-1 gap-3 sm:grid-cols-2 sm:grid-rows-2">
      <div
        v-for="(item, index) in flywheelItems"
        :key="item.title"
        class="flex flex-col rounded-trace border border-white/10 bg-white/[0.06] p-4"
      >
        <p class="text-xs font-semibold text-trace-cyan">
          {{ String(index + 1).padStart(2, '0') }}
        </p>
        <p class="mt-2 font-display text-lg font-semibold">
          {{ item.title }}
        </p>
        <p class="mt-2 text-sm leading-6 text-white/70">
          {{ item.detail }}
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
