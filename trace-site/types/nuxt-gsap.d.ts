declare module '#app' {
  interface NuxtApp {
    $gsap: typeof import('gsap')['gsap']
    $ScrollTrigger: typeof import('gsap/ScrollTrigger')['ScrollTrigger']
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $gsap: typeof import('gsap')['gsap']
    $ScrollTrigger: typeof import('gsap/ScrollTrigger')['ScrollTrigger']
  }
}

export {}
