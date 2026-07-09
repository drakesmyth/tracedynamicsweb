<script setup lang="ts">
// Illustrative schematic of one synchronized capture session — layout, not real data.
const PX = 118
const PW = 470
const x = (t: number) => PX + t * PW

const frames = Array.from({ length: 10 }, (_, i) => x(i / 10))
const depthCells = Array.from({ length: 10 }, (_, i) => x(i / 10) + 13)

const imu = Array.from({ length: 61 }, (_, i) => {
  const t = i / 60
  const y = 90 + Math.sin(t * Math.PI * 9) * 6 + Math.sin(t * Math.PI * 22) * 3.5
  return `${x(t).toFixed(1)},${y.toFixed(1)}`
}).join(' ')

const mag = Array.from({ length: 11 }, (_, i) => {
  const t = i / 10
  return { x: x(t), y: 122 + Math.sin(t * Math.PI * 2.5) * 6 }
})
const magPoints = mag.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')

const baro = Array.from({ length: 11 }, (_, i) => {
  const t = i / 10
  return { x: x(t), y: 154 - t * 7 + Math.sin(t * Math.PI * 1.3) * 2 }
})
const baroPath = baro
  .map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
  .join(' ')

const audio = Array.from({ length: 66 }, (_, i) => {
  const t = i / 66
  const h =
    Math.abs(
      Math.sin(t * Math.PI * 16) * Math.sin(t * Math.PI * 3) +
        Math.sin(t * Math.PI * 30) * 0.4,
    ) *
      12 +
    1
  return { x: x(t), h }
})

const specRows = [
  { stream: 'Body motion (IMU)', captures: 'Accelerometer + gyroscope across the worn sensor swarm', sampled: '240 Hz', stored: '50 Hz' },
  { stream: 'Magnetometer', captures: 'Magnetic heading and orientation reference', sampled: '240 Hz', stored: '10 Hz' },
  { stream: 'Context video', captures: 'Wide-angle RGB scene', sampled: '—', stored: '10 Hz' },
  { stream: 'Depth (dToF)', captures: '48×32 time-of-flight depth map', sampled: '—', stored: '10 Hz' },
  { stream: 'Barometric', captures: 'Pressure and altitude context', sampled: '—', stored: '10 Hz' },
  { stream: 'Audio', captures: 'High-fidelity voices and environmental sound', sampled: '—', stored: 'continuous' },
]
</script>

<template>
  <div
    class="rounded-trace border border-trace-line bg-white/70 p-5 shadow-soft sm:p-6"
    data-reveal
  >
    <svg
      viewBox="0 0 600 240"
      class="h-auto w-full"
      role="img"
      aria-label="Schematic of one synchronized capture session: video, depth, motion, magnetometer, barometric, and audio streams time-aligned on a shared timeline"
    >
      <g stroke="#dfe8e1" stroke-width="1" stroke-dasharray="3 4">
        <line x1="274" y1="12" x2="274" y2="208" />
        <line x1="431" y1="12" x2="431" y2="208" />
      </g>
      <line x1="118" y1="216" x2="588" y2="216" stroke="#dfe8e1" />
      <text x="118" y="230" font-size="9" fill="#53637b">0</text>
      <text x="588" y="230" font-size="9" fill="#53637b" text-anchor="end">1 second</text>

      <g font-size="10" font-weight="600" fill="#071b3d">
        <text x="8" y="31">Context video</text>
        <text x="8" y="63">Depth · dToF</text>
        <text x="8" y="95">Body motion</text>
        <text x="8" y="127">Magnetometer</text>
        <text x="8" y="159">Barometric</text>
        <text x="8" y="191">Audio</text>
      </g>
      <g font-size="8.5" fill="#53637b">
        <text x="8" y="42">10 Hz</text>
        <text x="8" y="74">10 Hz · 48×32</text>
        <text x="8" y="106">IMU · 50 Hz</text>
        <text x="8" y="138">10 Hz</text>
        <text x="8" y="170">10 Hz</text>
        <text x="8" y="202">continuous</text>
      </g>

      <!-- video frames -->
      <g opacity="0.85">
        <rect
          v-for="(fx, i) in frames"
          :key="`v${i}`"
          :x="fx"
          y="20"
          width="38"
          height="20"
          rx="2"
          :fill="i % 2 ? '#005aa9' : '#0aa7d9'"
        />
      </g>
      <!-- depth cells -->
      <g fill="#11b7c8" opacity="0.72">
        <rect
          v-for="(dx, i) in depthCells"
          :key="`d${i}`"
          :x="dx"
          y="52"
          width="20"
          height="18"
          rx="2"
        />
      </g>
      <!-- imu wave (dense) -->
      <polyline :points="imu" fill="none" stroke="#43a642" stroke-width="1.6" />
      <!-- magnetometer -->
      <polyline :points="magPoints" fill="none" stroke="#064579" stroke-width="1.4" />
      <g fill="#064579">
        <circle v-for="(p, i) in mag" :key="`m${i}`" :cx="p.x" :cy="p.y" r="1.8" />
      </g>
      <!-- barometric -->
      <path :d="baroPath" fill="none" stroke="#7c8aa0" stroke-width="1.4" />
      <g fill="#7c8aa0">
        <circle v-for="(p, i) in baro" :key="`b${i}`" :cx="p.x" :cy="p.y" r="1.6" />
      </g>
      <!-- audio waveform -->
      <g stroke="#67b638" stroke-width="2" stroke-linecap="round">
        <line
          v-for="(a, i) in audio"
          :key="`a${i}`"
          :x1="a.x"
          :y1="188 - a.h"
          :x2="a.x"
          :y2="188 + a.h"
        />
      </g>
    </svg>

    <p class="mt-1 text-center text-xs text-trace-muted">
      One session, every stream aligned to the millisecond. Illustrative layout, not real capture.
    </p>

    <div class="mt-5 overflow-x-auto">
      <table class="w-full min-w-[540px] border-collapse text-left text-sm">
        <thead class="border-b border-trace-line text-xs uppercase text-trace-blue">
          <tr>
            <th class="py-2 pr-4 font-semibold">Stream</th>
            <th class="py-2 pr-4 font-semibold">Captures</th>
            <th class="py-2 pr-4 font-semibold">Sampled</th>
            <th class="py-2 font-semibold">Stored</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-trace-line">
          <tr v-for="row in specRows" :key="row.stream" class="align-top">
            <td class="py-2 pr-4 font-semibold text-trace-ink">{{ row.stream }}</td>
            <td class="py-2 pr-4 text-trace-muted">{{ row.captures }}</td>
            <td class="whitespace-nowrap py-2 pr-4 text-trace-muted">{{ row.sampled }}</td>
            <td class="whitespace-nowrap py-2 font-semibold text-trace-ink">{{ row.stored }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="mt-3 text-xs text-trace-muted">
      Sampled rate shown where it exceeds the stored rate — inertial streams are
      oversampled and quantized down. All streams share one clock.
    </p>
  </div>
</template>
