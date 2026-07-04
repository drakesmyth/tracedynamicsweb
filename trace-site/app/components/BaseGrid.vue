<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    columns?: 2 | 3 | 4
    gap?: 'sm' | 'md' | 'lg'
  }>(),
  {
    columns: 3,
    gap: 'md',
  },
)

const columnClasses = computed(() => ({
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
}[props.columns]))

const gapClasses = computed(() => ({
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
}[props.gap]))
</script>

<template>
  <div :class="['grid', columnClasses, gapClasses]">
    <slot />
  </div>
</template>

