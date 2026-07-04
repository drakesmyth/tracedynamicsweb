import type Lenis from 'lenis'

declare module '#app' {
  interface NuxtApp {
    $lenis: Lenis | null
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $lenis: Lenis | null
  }
}

export {}

