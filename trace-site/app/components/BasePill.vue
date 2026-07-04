<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tone?: 'blue' | 'green' | 'cyan' | 'lime' | 'neutral'
  }>(),
  {
    tone: 'neutral',
  },
)

const toneClasses = computed(() => ({
  blue: 'border-trace-blue/20 bg-trace-blue/10 text-trace-blue',
  green: 'border-trace-green/20 bg-trace-green/10 text-trace-green',
  cyan: 'border-trace-cyan/25 bg-trace-cyan/10 text-trace-blue',
  lime: 'border-trace-lime/30 bg-trace-lime/15 text-trace-green',
  neutral: 'border-trace-line bg-white/80 text-trace-muted',
}[props.tone]))
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase',
      toneClasses,
    ]"
  >
    <span class="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
    <slot />
  </span>
</template>

