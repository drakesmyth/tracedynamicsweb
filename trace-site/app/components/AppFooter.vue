<script setup lang="ts">
import { footerNavigation } from '~/utils/navigation'
</script>

<template>
  <footer class="border-t border-trace-line bg-trace-cloud/60">
    <BaseContainer class="py-10 sm:py-12">
      <div class="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div class="max-w-xl">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-3 font-display text-lg font-bold"
            aria-label="TRACE Dynamics home"
          >
            <TraceMark class="h-8 w-8" />
            <BrandWordmark class="text-lg" />
          </NuxtLink>
          <p class="mt-4 text-sm leading-6 text-trace-muted">
            The missing data layer for embodied AI, built with contributors,
            researchers, and real-world motion.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul class="grid gap-3 text-sm text-trace-muted sm:grid-cols-2">
            <li v-for="item in footerNavigation" :key="item.to">
              <NuxtLink class="transition hover:text-trace-blue" :to="item.to">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="mt-10 flex flex-col gap-3 border-t border-trace-line pt-6 text-xs text-trace-muted sm:flex-row sm:items-center sm:justify-between"
      >
        <p>TRACE Dynamics. Training robots to move with you.</p>
        <p class="trace-gradient-text font-medium">
          Blue circuits. Green motion. Real-world data.
        </p>
      </div>
    </BaseContainer>
  </footer>
</template>
