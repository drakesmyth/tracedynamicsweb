<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    body?: string
    tone?: 'plain' | 'brand' | 'dark'
  }>(),
  {
    eyebrow: undefined,
    title: undefined,
    body: undefined,
    tone: 'plain',
  },
)

const toneClasses = computed(() => ({
  plain: 'trace-card border-trace-line bg-white/90 text-trace-ink shadow-soft',
  brand:
    'trace-card border-trace-cyan/25 bg-trace-signal/80 text-trace-ink shadow-glow',
  dark: 'trace-card-dark border-trace-blue/30 bg-trace-ink text-white shadow-glow',
}[props.tone]))

const eyebrowClasses = computed(() => ({
  plain: 'text-trace-blue',
  brand: 'text-trace-green',
  dark: 'text-trace-cyan',
}[props.tone]))

const bodyClasses = computed(() => ({
  plain: 'text-trace-muted',
  brand: 'text-trace-muted',
  dark: 'text-white/72',
}[props.tone]))
</script>

<template>
  <article
    :class="[
      'relative overflow-hidden rounded-trace border p-6 transition duration-300 hover:-translate-y-1',
      toneClasses,
    ]"
    data-reveal
  >
    <p
      v-if="eyebrow"
      :class="['text-xs font-semibold uppercase', eyebrowClasses]"
    >
      {{ eyebrow }}
    </p>
    <h3
      v-if="title"
      class="mt-3 font-display text-xl font-semibold leading-tight"
    >
      {{ title }}
    </h3>
    <p v-if="body" :class="['mt-3 text-sm leading-6', bodyClasses]">
      {{ body }}
    </p>

    <div v-if="$slots.default" :class="title || body ? 'mt-5' : ''">
      <slot />
    </div>

    <div v-if="$slots.footer" class="mt-6">
      <slot name="footer" />
    </div>
  </article>
</template>
