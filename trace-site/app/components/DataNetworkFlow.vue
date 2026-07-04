<script setup lang="ts">
const flowSteps = [
  'Person',
  'Sensor kit',
  'App',
  'The WELL',
  'Behavior models',
]
</script>

<template>
  <div
    class="trace-card rounded-trace border border-trace-line p-5 shadow-glow"
    data-reveal
  >
    <div class="grid gap-3 md:flex md:items-center">
      <template v-for="(step, index) in flowSteps" :key="step">
        <div
          class="rounded-trace border border-trace-line bg-white/90 p-4 text-center md:flex-1"
        >
          <p class="font-display text-base font-semibold text-trace-ink">
            {{ step }}
          </p>
        </div>
        <div
          v-if="index < flowSteps.length - 1"
          class="hidden h-px w-8 shrink-0 bg-[linear-gradient(90deg,#005aa9,#11b7c8,#67b638)] md:block"
          aria-hidden="true"
        />
      </template>
    </div>
    <p class="mt-5 text-sm leading-6 text-trace-muted">
      Every uploaded hour moves through quality grading, fraud detection,
      consent-aware capture settings, and contributor accounting before it can
      enter the WELL.
    </p>
  </div>
</template>
