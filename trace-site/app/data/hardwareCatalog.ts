export interface HardwareProduct {
  slug: string
  eyebrow: string
  title: string
  price: string
  status: string
  image: string
  alt: string
  imageFit: 'contain' | 'cover'
  summary: string
  body: string
  includes: string[]
  specs: Array<{
    label: string
    value: string
    detail: string
  }>
  bestFor: string[]
  primaryTo: string
  primaryLabel: string
  secondaryTo: string
  secondaryLabel: string
}

export const hardwareProducts: HardwareProduct[] = [
  {
    slug: 'baseline-capture-kit',
    eyebrow: 'Contributor kit',
    title: 'Baseline Capture Kit',
    price: '~$200 target',
    status: 'Waitlist',
    image: '/media/trace-mmt-board-render.jpg',
    alt: 'TRACE MMT board render',
    imageFit: 'contain',
    summary:
      'The starter path for contributors: one MMT core plus a six-to-eight sensor body swarm for eligible real-world sessions.',
    body: 'The baseline kit is the first complete contributor configuration TRACE needs to support. It pairs scene context with enough body motion fidelity to capture real tasks without a studio.',
    includes: ['MMT Gen3-class core', '6-8 body sensors', 'Session capture path'],
    specs: [
      {
        label: 'Core',
        value: 'MMT Gen3',
        detail: 'Chest- or head-mounted scene, audio, depth mapping, motion, and task context.',
      },
      {
        label: 'Motion',
        value: '6-8 sensors',
        detail: 'Baseline body swarm for ordinary contributor sessions.',
      },
      {
        label: 'Status',
        value: 'Waitlist',
        detail: 'Checkout opens after onboarding, inventory, and terms are ready.',
      },
    ],
    bestFor: ['Early contributors', 'Bench work', 'Tool use', 'Kitchen and home tasks'],
    primaryTo: '/request-access?path=hardware',
    primaryLabel: 'Join waitlist',
    secondaryTo: '/well',
    secondaryLabel: 'See data path',
  },
  {
    slug: 'mmt-module',
    eyebrow: 'Core unit',
    title: 'MMT Module',
    price: 'Pricing TBD',
    status: 'Prototype',
    image: '/media/trace-hardware-field-photo.jpeg?v=2',
    alt: 'TRACE prototype hardware board with camera and storage connections',
    imageFit: 'contain',
    summary:
      'The scene and task anchor for TRACE capture: wide RGB, depth mapping, audio, barometric context, motion, and local storage.',
    body: 'Every TRACE kit starts with the MMT. It gives body-sensor streams a real-world frame of reference: what the contributor was doing, what tools were present, and how the workspace changed.',
    includes: ['Scene capture', 'Audio and depth mapping ready', 'Storage and sync'],
    specs: [
      {
        label: 'Role',
        value: 'Required core',
        detail: 'The MMT is the anchor for contributor capture sessions.',
      },
      {
        label: 'Signals',
        value: 'Multimodal',
        detail: 'Scene, sound, motion, pressure context, and local capture plumbing.',
      },
      {
        label: 'Status',
        value: 'Prototype',
        detail: 'Hardware is moving through bench and field testing.',
      },
    ],
    bestFor: ['Scene context', 'Task timing', 'Hardware development', 'Capture validation'],
    primaryTo: '/request-access?path=hardware',
    primaryLabel: 'Request access',
    secondaryTo: '/shop',
    secondaryLabel: 'Back to shop',
  },
  {
    slug: 'body-sensor-swarm',
    eyebrow: 'Expansion',
    title: 'Body Sensor Swarm',
    price: 'By configuration',
    status: 'Planned',
    image: '/media/trace-swarm-dashboard.jpg',
    alt: 'TRACE swarm dashboard showing harvested devices',
    imageFit: 'cover',
    summary:
      'Add motion fidelity for hands, arms, torso, legs, and task-specific capture needs as contributor work scales.',
    body: 'The swarm turns an MMT session into a richer physical record. Sensor count can scale with task complexity, motion fidelity needs, and the contributor path TRACE is validating.',
    includes: ['6-20 sensor range', 'Synced motion streams', 'Quality-gated uploads'],
    specs: [
      {
        label: 'Range',
        value: '6-20 sensors',
        detail: 'Baseline to higher-fidelity body configurations.',
      },
      {
        label: 'Data',
        value: 'Motion streams',
        detail: 'Reach, turn, lift, step, pause, and handoff patterns.',
      },
      {
        label: 'Status',
        value: 'Planned',
        detail: 'Configuration options should follow validation and contributor needs.',
      },
    ],
    bestFor: ['Handoffs', 'Full-body tasks', 'Human-proximity motion', 'Workspace sharing'],
    primaryTo: '/request-access?path=hardware',
    primaryLabel: 'Request access',
    secondaryTo: '/contributors',
    secondaryLabel: 'Contributor path',
  },
]

export const getHardwareProduct = (slug: string) =>
  hardwareProducts.find((product) => product.slug === slug)
