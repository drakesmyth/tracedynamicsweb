<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lead: string
}>()
</script>

<template>
  <section class="trace-brand-surface border-b border-trace-line">
    <BaseContainer class="relative py-16 sm:py-24">
      <div class="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div data-reveal>
          <p class="text-sm font-semibold uppercase text-trace-blue">
            {{ eyebrow }}
          </p>
          <h1
            class="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-trace-ink sm:text-6xl"
          >
            {{ title }}
          </h1>
          <div
            class="mt-5 h-1.5 w-28 rounded-full bg-[linear-gradient(90deg,#005aa9,#11b7c8,#67b638,#9bd13d)]"
            aria-hidden="true"
          />
          <p class="mt-6 max-w-2xl text-base leading-7 text-trace-muted sm:text-xl">
            {{ lead }}
          </p>
        </div>

        <div class="flex flex-col gap-4 lg:items-end" data-reveal>
          <slot name="actions" />
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
