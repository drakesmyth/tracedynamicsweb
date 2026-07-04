<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    lead?: string
    tone?: 'plain' | 'soft'
  }>(),
  {
    eyebrow: undefined,
    title: undefined,
    lead: undefined,
    tone: 'plain',
  },
)
</script>

<template>
  <section
    :class="[
      'py-12 sm:py-16',
      tone === 'soft'
        ? 'border-y border-trace-line bg-[linear-gradient(135deg,rgba(238,246,242,0.82),rgba(230,247,241,0.58))]'
        : '',
    ]"
  >
    <BaseContainer>
      <div v-if="eyebrow || title || lead" class="max-w-3xl" data-reveal>
        <p
          v-if="eyebrow"
          class="text-sm font-semibold uppercase text-trace-blue"
        >
          {{ eyebrow }}
        </p>
        <h2
          v-if="title"
          class="mt-3 font-display text-3xl font-bold leading-tight text-trace-ink sm:text-5xl"
        >
          {{ title }}
        </h2>
        <p v-if="lead" class="mt-5 text-base leading-7 text-trace-muted sm:text-lg">
          {{ lead }}
        </p>
      </div>

      <div :class="eyebrow || title || lead ? 'mt-10' : ''">
        <slot />
      </div>
    </BaseContainer>
  </section>
</template>
