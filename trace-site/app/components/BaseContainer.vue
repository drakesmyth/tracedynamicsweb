<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string
    size?: 'sm' | 'md' | 'lg' | 'full'
  }>(),
  {
    as: 'div',
    size: 'lg',
  },
)

const sizeClasses = computed(() => ({
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  full: 'max-w-none',
}[props.size]))
</script>

<template>
  <component
    :is="as"
    :class="['mx-auto w-full px-5 sm:px-6 lg:px-8', sizeClasses]"
  >
    <slot />
  </component>
</template>

