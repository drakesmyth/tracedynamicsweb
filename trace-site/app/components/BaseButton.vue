<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    href?: string
    to?: string
    disabled?: boolean
    size?: 'sm' | 'md'
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'ghost'
  }>(),
  {
    disabled: false,
    href: undefined,
    to: undefined,
    size: 'md',
    type: 'button',
    variant: 'primary',
  },
)

const baseClasses =
  'inline-flex min-h-10 items-center justify-center rounded-trace font-semibold transition duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50'

const sizeClasses = computed(() => ({
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
}[props.size]))

const variantClasses = computed(() => ({
  primary:
    'bg-[linear-gradient(115deg,#005aa9,#11b7c8_48%,#43a642)] text-white shadow-glow hover:-translate-y-0.5 hover:saturate-125 focus-visible:outline-trace-blue',
  secondary:
    'border border-trace-line bg-white text-trace-ink shadow-soft hover:-translate-y-0.5 hover:border-trace-cyan hover:text-trace-blue focus-visible:outline-trace-blue',
  ghost:
    'text-trace-ink hover:bg-trace-signal hover:text-trace-blue focus-visible:outline-trace-blue',
}[props.variant]))
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :aria-disabled="disabled"
    :class="[baseClasses, sizeClasses, variantClasses]"
    :tabindex="disabled ? -1 : undefined"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :aria-disabled="disabled"
    :class="[baseClasses, sizeClasses, variantClasses]"
    :tabindex="disabled ? -1 : undefined"
  >
    <slot />
  </a>
  <button
    v-else
    :disabled="disabled"
    :type="type"
    :class="[baseClasses, sizeClasses, variantClasses]"
  >
    <slot />
  </button>
</template>
