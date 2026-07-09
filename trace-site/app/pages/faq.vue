<script setup lang="ts">
useSeoMeta({
  title: 'FAQ',
  description:
    'Straight answers about TRACE Dynamics — how contributing works, how contributors are paid, what the kit records, privacy and consent, hardware, and research access.',
})

const faqGroups = [
  {
    category: 'Getting started',
    items: [
      {
        q: 'How do I become a contributor?',
        a: 'Request access and tell us what work you can capture, where it happens, and your setup. Approved contributors are onboarded first, receive a kit, and start recording eligible sessions. Everything routes through one intake on the Request Access page.',
      },
      {
        q: 'What do I actually have to do — and is it hard?',
        a: 'Wear a light sensor kit while you do the ordinary work you would be doing anyway — a chest- or head-mounted core plus body-worn motion sensors. There is nothing to perform for a camera; the goal is real, everyday tasks. No AI or technical background is needed.',
      },
      {
        q: 'Is there any obligation or minimum?',
        a: 'None. No minimum, no schedule, and no lock-in — you record the sessions you want, when they fit your work. Because your pay tracks your verified contribution, more hours simply means more earning.',
      },
    ],
  },
  {
    category: 'Getting paid',
    items: [
      {
        q: 'How and when do contributors get paid?',
        a: 'Contributors are paid a share of the licensing revenue the dataset earns, in proportion to their verified contribution — and again each time it licenses, for as long as the data keeps earning. Exact terms are set during onboarding.',
      },
      {
        q: 'Why do early contributors earn more?',
        a: 'The reward rate is highest at the start and declines as the corpus grows, so the earliest verified hours earn the largest share — and each hour keeps paying for as long as the data continues to license. Getting in early is the single biggest advantage.',
      },
      {
        q: 'Is this an investment?',
        a: 'No. You are paid for verified work you do, not buying or funding anything — it is compensation for producing data, not a financial product. Formal terms are finalized with counsel and shared at onboarding.',
      },
    ],
  },
  {
    category: 'Data, privacy & consent',
    items: [
      {
        q: 'What exactly does the kit record?',
        a: 'A synchronized bundle of streams: wide-angle video, depth mapping, audio, barometric context, and full-body motion from the worn sensors — all aligned to the millisecond. Inertial motion is sampled fast (240 Hz) and stored at working rates; video, depth, and barometric at 10 Hz; audio continuously. The WELL page shows the full breakdown.',
      },
      {
        q: 'How is my privacy protected?',
        a: 'You choose the capture mode for each session and control what is recorded. Only sessions that pass automated quality, consent, and fraud checks enter the corpus, and the data is valued for physical behavior — how people move and work — not the identities of the people in it. Privacy filtering is part of the processing path.',
      },
      {
        q: 'Is it legal to record while I work?',
        a: 'Recording in real places touches consent and privacy law that varies by location, such as two-party-consent rules or GDPR. Contributors choose capture settings and stay responsible for local permissions; TRACE supplies the controls, guidance, and validation gates to help you stay within them. This is covered during onboarding.',
      },
      {
        q: 'What happens to my data, and can I stop?',
        a: 'Accepted sessions become part of the corpus that researchers and licensees build on. Contributing is voluntary and you can stop at any time; questions about specific sessions are handled during onboarding.',
      },
    ],
  },
  {
    category: 'The hardware',
    items: [
      {
        q: 'What does the kit cost, and when can I get one?',
        a: 'The baseline kit — an MMT core plus six to eight body sensors — targets about $200, built from commodity parts. Public availability is coming soon; access opens to approved contributors first, and the current generation records, syncs, and uploads real data today.',
      },
      {
        q: 'Can I build it myself?',
        a: 'That is the direction. TRACE plans to open the data format, specifications, and a reference design so kits can be manufactured on demand and sourced independently — toward wide availability and a competitive market for capture hardware.',
      },
      {
        q: 'Is the hardware real, or still a concept?',
        a: 'Real and working. The sensor hardware, firmware, the millisecond-synced collection protocol, and the harvest-and-upload pipeline are built and proven in multi-device field testing, and a supply-chain-optimized version is in production validation now. Photos of the actual boards are on the home page.',
      },
    ],
  },
  {
    category: 'Researchers & the data',
    items: [
      {
        q: 'How do researchers get access to the WELL?',
        a: 'Request research access and tell us your task category, model work, and use case. Non-commercial research, evaluation, and product development can use the WELL for free, and we are opening early advisory access so research teams can help shape what gets captured. See the Researchers page.',
      },
      {
        q: 'Free for research, licensed for commercial — how does that work?',
        a: 'Research, non-commercial work, and product development can build on the WELL at no cost. A commercial license applies when a resulting model or dataset is sold or deployed commercially — and that license is what funds the dataset and pays the contributors.',
      },
      {
        q: 'Who owns the corpus?',
        a: 'TRACE Dynamics builds and operates the corpus and the pipeline that turns raw capture into training-ready data. Contributors share in the value it licenses for, and researchers access it under clear terms. It is meant to be an open, neutral resource, not a captive single-vendor dataset.',
      },
    ],
  },
  {
    category: 'About TRACE',
    items: [
      {
        q: 'What are Large Behavior Models?',
        a: 'LBMs are the models being trained to give robots physical competence — how to move, manipulate, and cooperate in the real world. Language models learned from text and vision models from images; LBMs need the missing record of real human physical work, which is what the WELL provides.',
      },
      {
        q: 'Why does this need to exist, and why now?',
        a: 'Robots are being funded like a platform shift and capable hardware is shipping, but there is no open, in-the-wild record of how people actually move and work together to train them on. The lesson from language and vision is that real-world data breadth wins — and the window to build that corpus in the open is finite.',
      },
      {
        q: 'What are the risks?',
        a: 'TRACE depends on markets and technology that are still developing, and the hardest part is scale — recruiting contributors and landing the first commercial users. Privacy, consent, and payment logistics vary by country and are real challenges. We are candid about all of this in our whitepaper.',
      },
      {
        q: 'Who is behind TRACE?',
        a: 'A small, founder-led team building the whole stack end to end — capture hardware, firmware, the corpus, and the contributor network. Meet them on the Team page.',
      },
    ],
  },
  {
    category: 'Our thinking',
    items: [
      {
        q: 'Is this just a data play, or do you believe in something?',
        a: 'Both — and for TRACE they are the same thing. The behavior of the robots that will share our homes and workplaces is shaped by what they learn from, and the record of real, cooperative human work does not exist yet at the scale or quality this needs. We think building it matters, and that it should be built in the open, with the people who produce it sharing in what it earns. That conviction is why the model looks the way it does; it is not a story told on top of it.',
      },
      {
        q: 'Aren\'t you just helping robots replace people?',
        a: 'The robots are being built either way. It\'s settled, not something TRACE can start or stop. The real question is what kind of robots will they be: helpful, general machines that cooperate with people on everyday work, or narrow ones built to take the jobs people used to be paid for and meter access to what they do, extracting subscriptions for every skill and task.\n\nWhich future we get depends largely on what these systems learn from and who controls them. TRACE is building toward the first — an open record of real, cooperative human work that the people who create it share in, and individuals, institutions, and businesses can build on — because we would rather help build that future than leave it to whoever encloses the data first.',
      },
      {
        q: 'Why open the data instead of keeping it?',
        a: 'A captive, single-vendor dataset serves one company\'s robots; an open corpus serves everyone building embodied AI. It is a stronger position, not a charitable one — the window to establish a shared, neutral resource before the space consolidates is finite, and getting there first is the advantage. Open is the strategy and the principle at once.',
      },
      {
        q: 'What kind of AI are you trying to help build?',
        a: 'Systems that can work alongside people — anticipate a movement, share a space, hand something off, cooperate — because they were trained on how humans really do those things. Competence and good behavior grown from real experience, rather than bolted on afterward. What goes into the training is what comes out of it.',
      },
    ],
  },
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqGroups.flatMap((group) =>
          group.items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        ),
      }),
    },
  ],
})

useScrollReveal()
</script>

<template>
  <div>
    <HeroSection
      eyebrow="FAQ"
      title="Questions, answered."
      lead="Straight answers on how TRACE works — for contributors, researchers, and anyone deciding whether to take part."
    >
      <template #visual>
        <BrandSignalPanel />
      </template>
    </HeroSection>

    <BaseSection
      v-for="(group, i) in faqGroups"
      :key="group.category"
      :eyebrow="group.category"
      :tone="i % 2 === 1 ? 'soft' : 'plain'"
    >
      <div class="divide-y divide-trace-line">
        <div
          v-for="item in group.items"
          :key="item.q"
          class="py-5 first:pt-0 last:pb-0"
          data-reveal
        >
          <h3 class="font-display text-lg font-semibold text-trace-ink">
            {{ item.q }}
          </h3>
          <p
            v-for="(para, pi) in item.a.split('\n\n')"
            :key="pi"
            class="mt-2 max-w-3xl text-sm leading-7 text-trace-muted sm:text-base"
          >
            {{ para }}
          </p>
        </div>
      </div>
    </BaseSection>

    <CtaPanel
      eyebrow="Still have a question?"
      title="Tell us what you need."
      lead="Contributors, researchers, and press all start from one request — ask anything in the message field and a person will follow up."
      primary-label="Request access"
      primary-to="/request-access"
      secondary-label="Explore the WELL"
      secondary-to="/well"
    />
  </div>
</template>
