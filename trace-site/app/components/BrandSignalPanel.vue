<template>
  <div
    class="trace-brand-surface w-full max-w-sm rounded-trace border border-trace-line p-5 shadow-glow"
  >
    <div class="relative">
      <div class="flex items-center justify-between gap-4">
        <TraceMark class="h-14 w-14" />
        <div class="text-right">
          <p class="font-display text-sm font-bold uppercase text-trace-blue">
            TRACE
          </p>
          <p class="font-display text-sm font-bold uppercase text-trace-green">
            Dynamics
          </p>
        </div>
      </div>

      <p class="mt-8 font-display text-2xl font-semibold leading-tight text-trace-ink">
        Training robots to move with you.
      </p>

      <div class="mt-6 grid grid-cols-3 gap-2">
        <div class="h-2 rounded-full bg-trace-blue" />
        <div class="h-2 rounded-full bg-trace-cyan" />
        <div class="h-2 rounded-full bg-trace-green" />
      </div>
    </div>
  </div>
</template>
