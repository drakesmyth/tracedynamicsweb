<script setup lang="ts">
import {
  progressGenerations,
  progressFootnote,
} from '~/data/progressFeed'

useSeoMeta({
  title: 'Progress',
  description:
    'What TRACE Dynamics has built, in order — from the first prototype boards to the current second-generation capture kit now in swarm testing.',
})

const formatDate = (d: string) =>
  new Date(d + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

useScrollReveal()
</script>

<template>
  <div>
    <BaseSection
      eyebrow="Progress"
      title="What we've built, in order."
      lead="TRACE is on its second generation. The first proved the concept end to end; the current generation adds sensors, cuts cost, and runs leaner. Here is the trail, newest first."
    >
      <div class="space-y-14">
        <div
          v-for="gen in progressGenerations"
          :key="gen.label"
        >
          <h2
            class="font-display text-sm font-semibold uppercase tracking-wide text-trace-blue"
            data-reveal
          >
            {{ gen.label }}
          </h2>

          <ol class="mt-6 space-y-0">
            <li
              v-for="entry in gen.entries"
              :key="entry.date + entry.title"
              class="relative border-l border-trace-line py-5 pl-6 sm:pl-8"
              data-reveal
            >
              <span
                class="absolute -left-[5px] top-[26px] h-[9px] w-[9px] rounded-full bg-[linear-gradient(135deg,#005aa9,#11b7c8,#43a642)]"
                aria-hidden="true"
              />
              <time
                class="font-display text-xs font-semibold uppercase tracking-wide text-trace-muted"
                :datetime="entry.date"
              >
                {{ formatDate(entry.date) }}
              </time>
              <h3
                class="mt-1 font-display text-lg font-semibold text-trace-ink"
              >
                {{ entry.title }}
              </h3>
              <p class="mt-2 max-w-3xl text-sm leading-7 text-trace-muted sm:text-base">
                {{ entry.body }}
              </p>
            </li>
          </ol>
        </div>

        <p
          class="max-w-3xl border-t border-trace-line pt-6 text-sm italic leading-7 text-trace-muted"
          data-reveal
        >
          {{ progressFootnote }}
        </p>
      </div>
    </BaseSection>

    <CtaPanel
      eyebrow="Where this is going"
      title="Get in while it's early."
      lead="The hardware is nearly ready for contributors, and the earliest verified hours earn the largest share. Request access to take part."
      primary-label="Request access"
      primary-to="/request-access"
      secondary-label="Explore the WELL"
      secondary-to="/well"
    />
  </div>
</template>
