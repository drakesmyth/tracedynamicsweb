import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  let lenis: Lenis | null = null
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  let frameId = 0

  const raf = (time: number) => {
    lenis?.raf(time)
    frameId = requestAnimationFrame(raf)
  }

  if (!prefersReducedMotion) {
    lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
    })

    frameId = requestAnimationFrame(raf)
  }

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      cancelAnimationFrame(frameId)
      lenis?.destroy()
    })
  }

  return {
    provide: {
      lenis,
    },
  }
})
