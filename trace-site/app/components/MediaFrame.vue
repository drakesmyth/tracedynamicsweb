<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string
    alt: string
    caption?: string
    eyebrow?: string
    aspect?: 'wide' | 'square' | 'tall'
    fit?: 'cover' | 'contain'
  }>(),
  {
    caption: undefined,
    eyebrow: undefined,
    aspect: 'wide',
    fit: 'cover',
  },
)
</script>

<template>
  <figure
    class="trace-card rounded-trace border border-trace-line p-3 shadow-soft"
    data-reveal
  >
    <div
      :class="[
        'overflow-hidden rounded-[6px] bg-trace-ink',
        aspect === 'wide' ? 'aspect-[16/10]' : '',
        aspect === 'square' ? 'aspect-square' : '',
        aspect === 'tall' ? 'aspect-[4/5]' : '',
      ]"
    >
      <img
        :src="src"
        :alt="alt"
        :class="[
          'h-full w-full',
          fit === 'contain' ? 'object-contain' : 'object-cover',
        ]"
        loading="lazy"
      >
    </div>
    <figcaption v-if="caption || eyebrow" class="px-1 py-3">
      <p v-if="eyebrow" class="text-xs font-semibold uppercase text-trace-blue">
        {{ eyebrow }}
      </p>
      <p v-if="caption" class="mt-1 text-sm leading-6 text-trace-muted">
        {{ caption }}
      </p>
    </figcaption>
  </figure>
</template>
