<script setup lang="ts">
// Schematic only — illustrates the measured-vs-estimated gap, not real capture.
const J: Record<string, [number, number]> = {
  head: [60, 24], neck: [60, 42],
  sL: [45, 48], sR: [75, 48],
  eL: [37, 75], eR: [83, 75],
  wL: [33, 101], wR: [87, 101],
  hip: [60, 97], hL: [51, 100], hR: [69, 100],
  kL: [49, 139], kR: [71, 139],
  aL: [47, 178], aR: [73, 178],
}
const BONES: [string, string][] = [
  ['neck', 'head'], ['neck', 'sL'], ['neck', 'sR'], ['sL', 'eL'], ['eL', 'wL'],
  ['sR', 'eR'], ['eR', 'wR'], ['neck', 'hip'], ['hip', 'hL'], ['hip', 'hR'],
  ['hL', 'kL'], ['kL', 'aL'], ['hR', 'kR'], ['kR', 'aR'],
]

const at = (n: string): [number, number] => J[n] ?? [0, 0]

const bones = BONES.map(([a, b]) => {
  const [x1, y1] = at(a)
  const [x2, y2] = at(b)

  return { x1, y1, x2, y2 }
})
const joints = Object.keys(J).map((n) => {
  const [x, y] = at(n)

  return { x, y }
})
</script>

<template>
  <div
    class="rounded-trace border border-trace-line bg-white/70 p-6 shadow-soft"
    data-reveal
  >
    <div class="grid grid-cols-2 gap-4">
      <!-- Estimated from video: fuzzy uncertainty cloud at each joint -->
      <figure class="flex flex-col items-center">
        <svg
          viewBox="0 0 120 200"
          class="h-auto w-full max-w-[150px]"
          role="img"
          aria-label="Pose estimated from video: each joint is a blurry cloud of uncertainty"
        >
          <defs>
            <radialGradient id="uncertainty">
              <stop offset="0" stop-color="#d1584a" stop-opacity="0.5" />
              <stop offset="55%" stop-color="#d1584a" stop-opacity="0.22" />
              <stop offset="100%" stop-color="#d1584a" stop-opacity="0" />
            </radialGradient>
          </defs>
          <!-- faint true skeleton for reference -->
          <g stroke="#b7c3cd" stroke-width="2" stroke-linecap="round" opacity="0.5">
            <line v-for="(b, i) in bones" :key="`gb${i}`" :x1="b.x1" :y1="b.y1" :x2="b.x2" :y2="b.y2" />
          </g>
          <circle cx="60" cy="24" r="9" fill="none" stroke="#b7c3cd" stroke-width="2" opacity="0.5" />
          <!-- imprecision clouds, one per joint -->
          <g fill="url(#uncertainty)">
            <circle v-for="(j, i) in joints" :key="`u${i}`" :cx="j.x" :cy="j.y" r="16" />
          </g>
        </svg>
        <figcaption class="mt-3 text-center">
          <p class="text-sm font-semibold text-trace-ink">Estimated from video</p>
          <p class="mt-1 inline-block rounded-full bg-[#d1584a]/10 px-2.5 py-0.5 text-xs font-semibold text-[#b8402f]">
            ±15–25 cm per joint
          </p>
        </figcaption>
      </figure>

      <!-- Measured directly: joints locked to the body -->
      <figure class="flex flex-col items-center">
        <svg
          viewBox="0 0 120 200"
          class="h-auto w-full max-w-[150px]"
          role="img"
          aria-label="Pose measured directly, with joints locked to the body"
        >
          <defs>
            <linearGradient id="traceSkeleton" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#005aa9" />
              <stop offset="0.5" stop-color="#11b7c8" />
              <stop offset="1" stop-color="#43a642" />
            </linearGradient>
          </defs>
          <g stroke="url(#traceSkeleton)" stroke-width="2.4" stroke-linecap="round">
            <line v-for="(b, i) in bones" :key="`mb${i}`" :x1="b.x1" :y1="b.y1" :x2="b.x2" :y2="b.y2" />
          </g>
          <circle cx="60" cy="24" r="9" fill="none" stroke="url(#traceSkeleton)" stroke-width="2.4" />
          <g fill="#43a642">
            <circle v-for="(j, i) in joints" :key="`md${i}`" :cx="j.x" :cy="j.y" r="2.6" />
          </g>
        </svg>
        <figcaption class="mt-3 text-center">
          <p class="text-sm font-semibold text-trace-ink">Measured directly</p>
          <p class="mt-1 inline-block rounded-full bg-trace-signal px-2.5 py-0.5 text-xs font-semibold text-trace-green">
            6–20 pose + motion sensors
          </p>
        </figcaption>
      </figure>
    </div>
  </div>
</template>
