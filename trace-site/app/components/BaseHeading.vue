<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    lead?: string
    as?: 'h1' | 'h2' | 'h3'
    align?: 'left' | 'center'
    size?: 'page' | 'section' | 'compact'
    tone?: 'default' | 'inverse'
  }>(),
  {
    eyebrow: undefined,
    lead: undefined,
    as: 'h2',
    align: 'left',
    size: 'section',
    tone: 'default',
  },
)
</script>

<template>
  <div
    :class="[
      'max-w-3xl',
      align === 'center' ? 'mx-auto text-center' : '',
    ]"
    data-reveal
  >
    <p
      v-if="eyebrow"
      :class="[
        'text-sm font-semibold uppercase',
        tone === 'inverse' ? 'text-trace-cyan' : 'text-trace-blue',
      ]"
    >
      {{ eyebrow }}
    </p>
    <component
      :is="as"
      :class="[
        'mt-3 font-display font-bold leading-tight',
        tone === 'inverse' ? 'text-white' : 'text-trace-ink',
        size === 'page' ? 'text-4xl sm:text-6xl' : '',
        size === 'section' ? 'text-3xl sm:text-5xl' : '',
        size === 'compact' ? 'text-2xl sm:text-3xl' : '',
      ]"
    >
      {{ title }}
    </component>
    <div
      class="mt-5 h-1.5 w-24 rounded-full bg-[linear-gradient(90deg,#005aa9,#11b7c8,#67b638,#9bd13d)]"
      :class="align === 'center' ? 'mx-auto' : ''"
      aria-hidden="true"
    />
    <p
      v-if="lead"
      :class="[
        'mt-5 text-base leading-7 sm:text-lg',
        tone === 'inverse' ? 'text-white/72' : 'text-trace-muted',
      ]"
    >
      {{ lead }}
    </p>
  </div>
</template>
