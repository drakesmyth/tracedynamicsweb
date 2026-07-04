<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    lead: string
    primaryLabel?: string
    primaryTo?: string
    secondaryLabel?: string
    secondaryTo?: string
  }>(),
  {
    eyebrow: undefined,
    primaryLabel: undefined,
    primaryTo: undefined,
    secondaryLabel: undefined,
    secondaryTo: undefined,
  },
)
</script>

<template>
  <section class="py-16 sm:py-20">
    <BaseContainer>
      <div
        class="trace-brand-surface rounded-trace border border-trace-line p-6 shadow-glow sm:p-10"
        data-reveal
      >
        <div class="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div class="max-w-3xl">
            <p
              v-if="eyebrow"
              class="text-sm font-semibold uppercase text-trace-blue"
            >
              {{ eyebrow }}
            </p>
            <h2
              class="mt-3 font-display text-3xl font-bold leading-tight text-trace-ink sm:text-5xl"
            >
              {{ title }}
            </h2>
            <p class="mt-5 text-base leading-7 text-trace-muted sm:text-lg">
              {{ lead }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3 lg:justify-end">
            <BaseButton v-if="primaryLabel && primaryTo" :to="primaryTo">
              {{ primaryLabel }}
            </BaseButton>
            <BaseButton
              v-if="secondaryLabel && secondaryTo"
              :to="secondaryTo"
              variant="secondary"
            >
              {{ secondaryLabel }}
            </BaseButton>
            <slot name="actions" />
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

