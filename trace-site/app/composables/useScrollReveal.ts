export const useScrollReveal = (selector = '[data-reveal]') => {
  const animations: Array<{ kill: () => void }> = []

  onMounted(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      return
    }

    const { $gsap } = useNuxtApp()
    const elements = $gsap.utils.toArray<HTMLElement>(selector)

    elements.forEach((element) => {
      const animation = $gsap.fromTo(
        element,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 98%',
            once: true,
          },
        },
      )

      animations.push(animation)
    })
  })

  onBeforeUnmount(() => {
    animations.forEach((animation) => animation.kill())
  })
}
