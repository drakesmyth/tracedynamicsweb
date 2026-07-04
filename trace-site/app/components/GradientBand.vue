<script setup lang="ts">
withDefaults(
  defineProps<{
    tone?: 'light' | 'dark'
  }>(),
  {
    tone: 'light',
  },
)
</script>

<template>
  <section
    :class="[
      'overflow-hidden border-y border-trace-line py-16 sm:py-20',
      tone === 'dark'
        ? 'bg-trace-ink text-white'
        : 'bg-[linear-gradient(135deg,rgba(0,90,169,0.08),rgba(17,183,200,0.08),rgba(103,182,56,0.1))]',
    ]"
  >
    <BaseContainer>
      <slot />
    </BaseContainer>
  </section>
</template>
