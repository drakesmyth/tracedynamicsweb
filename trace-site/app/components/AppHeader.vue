<script setup lang="ts">
import { primaryNavigation } from '~/utils/navigation'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-trace-line bg-trace-canvas/90 backdrop-blur-xl"
  >
    <BaseContainer>
      <div class="flex h-[72px] items-center justify-between gap-4 py-4">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-3 font-display text-xl font-bold"
          aria-label="TRACE Dynamics home"
          @click="closeMenu"
        >
          <TraceMark class="h-9 w-9" />
          <BrandWordmark class="text-xl" />
        </NuxtLink>

        <nav class="hidden items-center gap-7 md:flex" aria-label="Primary">
          <NuxtLink
            v-for="item in primaryNavigation"
            :key="item.to"
            :to="item.to"
            class="text-sm font-medium text-trace-muted transition hover:text-trace-blue"
            active-class="text-trace-blue"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="hidden items-center gap-3 md:flex">
          <BaseButton to="/request-access" size="sm">Request access</BaseButton>
        </div>

        <button
          class="inline-flex h-10 w-10 items-center justify-center rounded-trace border border-trace-line bg-white shadow-soft md:hidden"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="grid h-4 w-4 gap-1" aria-hidden="true">
            <span class="h-0.5 rounded-full bg-trace-blue" />
            <span class="h-0.5 rounded-full bg-trace-cyan" />
            <span class="h-0.5 rounded-full bg-trace-green" />
          </span>
        </button>
      </div>
    </BaseContainer>

    <div
      v-if="isMenuOpen"
      id="mobile-navigation"
      class="border-t border-trace-line bg-trace-canvas md:hidden"
    >
      <BaseContainer class="py-4">
        <nav class="grid gap-2" aria-label="Mobile navigation">
          <NuxtLink
            v-for="item in primaryNavigation"
            :key="item.to"
            :to="item.to"
            class="rounded-trace px-2 py-3 text-sm font-medium text-trace-muted transition hover:bg-white hover:text-trace-blue"
            active-class="bg-white text-trace-blue"
            @click="closeMenu"
          >
            {{ item.label }}
          </NuxtLink>
          <BaseButton class="mt-2" to="/request-access" @click="closeMenu">
            Request access
          </BaseButton>
        </nav>
      </BaseContainer>
    </div>
  </header>
</template>
