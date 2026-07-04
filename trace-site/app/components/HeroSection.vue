<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lead: string
}>()
</script>

<template>
  <section class="trace-brand-surface border-b border-trace-line">
    <BaseContainer class="relative py-12 sm:py-16 lg:py-20">
      <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div data-reveal>
          <BasePill tone="cyan">{{ eyebrow }}</BasePill>
          <h1
            class="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-trace-ink sm:text-6xl"
          >
            {{ title }}
          </h1>
          <p class="mt-6 max-w-2xl text-base leading-7 text-trace-muted sm:text-xl">
            {{ lead }}
          </p>
          <div v-if="$slots.actions" class="mt-7 flex flex-wrap gap-3">
            <slot name="actions" />
          </div>
        </div>

        <div
          v-if="$slots.visual"
          class="hidden sm:block lg:justify-self-end"
          data-reveal
        >
          <slot name="visual" />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
