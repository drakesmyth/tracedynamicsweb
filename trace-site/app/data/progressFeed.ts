// TRACE progress feed — the single source for the /progress page.
// To post an update: add an entry to the top of the relevant generation's
// `entries` list (newest first) and commit. That's the whole workflow.

export interface ProgressEntry {
  date: string // ISO "YYYY-MM-DD"
  title: string
  body: string
}

export interface ProgressGeneration {
  label: string
  entries: ProgressEntry[]
}

export const progressGenerations: ProgressGeneration[] = [
  {
    label: 'Second generation · V2 / V3.5',
    entries: [
      {
        date: '2026-07-08',
        title: 'Swarm testing begins',
        body: 'The second-generation kit enters multi-device swarm testing, with body sensors running the production-candidate board — the start of the final major phase before the hardware is ready for contributors.',
      },
      {
        date: '2026-07-01',
        title: 'Body-sensor firmware feature-complete',
        body: 'The LMT motion-sensor firmware reaches feature completeness. Work shifts to the MMT core, which coordinates the sensor swarm and writes captured sessions to storage.',
      },
      {
        date: '2026-06-28',
        title: 'Capture and harvest, end to end',
        body: 'Firmware now logs on the body sensors and harvests their data to the MMT over the air, writing full sessions to the SD card — the complete pose-sensor capture pipeline running on real hardware.',
      },
      {
        date: '2026-06-27',
        title: 'Next-generation depth sensing in the pipeline',
        body: 'A higher-resolution, higher-framerate depth camera is being lined up for the next hardware generation.',
      },
      {
        date: '2026-06-26',
        title: 'Faster storage',
        body: 'New SD-card drivers make better use of the on-module memory, pushing capture throughput up.',
      },
      {
        date: '2026-06-25',
        title: 'Clean-slate swarm firmware',
        body: 'A ground-up rewrite of the swarm firmware comes to life: 50 Hz motion logging, automatic periodic uploads, sub-millisecond time sync across devices, and 240 Hz IMU sampling.',
      },
      {
        date: '2026-06-19',
        title: 'Document-driven firmware spec',
        body: "The new firmware is fully specified before it's built. TRACE develops document-first, with the specification treated as the source of truth.",
      },
      {
        date: '2026-06-15',
        title: 'Fixes fold forward',
        body: 'Power and shutdown quirks found on the new sensor boards are corrected on the bench, and the fixes carry straight into the MMT core and the V3.5 design, which shares most of the layout.',
      },
      {
        date: '2026-06-14',
        title: 'Second-generation hardware validates',
        body: 'First full functional pass on the new body-sensor hardware comes back 100%. Bring-up on the redesigned boards is clean.',
      },
      {
        date: '2026-06-01',
        title: 'New boards on the bench',
        body: 'The V3B MMT boards and the new C3-based body sensors arrive for smoke testing and firmware bring-up.',
      },
      {
        date: '2026-05-05',
        title: 'A simpler, cheaper second generation',
        body: 'A redesign leaves both units meaningfully simpler than the first generation — the body sensor especially — lowering cost, while the MMT core gains capability.',
      },
      {
        date: '2026-04-27',
        title: 'Exploring flash-free designs for supply resilience',
        body: 'Work begins on capture designs that drop the external flash chip entirely — simpler and cheaper to build, and less exposed to constrained parts, so the kit stays sourceable and manufacturable through shifting supply conditions.',
      },
      {
        date: '2026-04-07',
        title: 'A new generation of body sensors',
        body: 'The next-generation on-body sensor boards arrive, with expanded communication built in — the step up from the first-generation sensors.',
      },
    ],
  },
  {
    label: 'First generation · proving the concept',
    entries: [
      {
        date: '2026-04-07',
        title: 'Browser-based configuration and administration',
        body: 'The MMT firmware gains a built-in web console: configure, provision, and manage a device from any browser, with no special software to install.',
      },
      {
        date: '2026-03-10',
        title: 'First-generation system, proven end to end',
        body: 'The first complete generation comes together as a working system — scene camera, motion tracker, and master unit — capturing in sync and uploading finished sessions to cloud storage. First-generation proof, done.',
      },
      {
        date: '2026-01-29',
        title: 'MVP app rollout',
        body: 'An early companion app comes together — the first working tool for pairing the kit, starting a capture, and pulling data off the device. The software side of the system takes its first shape alongside the hardware.',
      },
      {
        date: '2025-12-18',
        title: 'A wearable multimodal core',
        body: 'A compact proof-of-concept brings camera, microphone, motion, and clock onto one small wearable board: the shape of the MMT to come.',
      },
      {
        date: '2025-09-25',
        title: 'Compact, manufacturable board',
        body: 'The board is redone from scratch for clean high-speed signal paths and shrunk to roughly 15×18 mm — small enough to wear comfortably, simple enough to make at scale.',
      },
      {
        date: '2025-06-05',
        title: 'First production-candidate build',
        body: 'The first-generation production candidates are confirmed: a simple, DIY-friendly build with USB-C charging and a small rechargeable battery.',
      },
      {
        date: '2025-04-28',
        title: 'Small enough to wear',
        body: 'A flash-only design proves the core capture concept in a package small enough to live on the body for a week or two at a time.',
      },
      {
        date: '2025-04-21',
        title: 'First prototype boards',
        body: 'The very first prototype boards arrive and come to life on the bench — where TRACE begins.',
      },
    ],
  },
]

export const progressFootnote =
  'Before any of this, an even earlier prototype ran on different silicon (Nordic nRF52840). It never shipped, but it proved the idea was worth building.'
