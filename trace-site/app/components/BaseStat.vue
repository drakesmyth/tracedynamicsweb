<script setup lang="ts">
defineProps<{
  value: string
  label: string
  detail?: string
}>()
</script>

<template>
  <div
    class="trace-card rounded-trace border border-trace-line p-5 shadow-soft"
    data-reveal
  >
    <p class="font-display text-4xl font-bold leading-none trace-gradient-text">
      {{ value }}
    </p>
    <p class="mt-3 font-semibold text-trace-ink">
      {{ label }}
    </p>
    <p v-if="detail" class="mt-2 text-sm leading-6 text-trace-muted">
      {{ detail }}
    </p>
  </div>
</template>

