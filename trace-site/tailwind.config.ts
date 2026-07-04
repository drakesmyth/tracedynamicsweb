import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './server/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        trace: {
          canvas: '#fbfcf8',
          ink: '#071b3d',
          muted: '#53637b',
          line: '#dfe8e1',
          cloud: '#eef6f2',
          navy: '#064579',
          blue: '#005aa9',
          sky: '#0aa7d9',
          cyan: '#11b7c8',
          signal: '#e6f7f1',
          green: '#43a642',
          lime: '#9bd13d',
          leaf: '#67b638',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        soft: '0 18px 60px rgb(7 27 61 / 0.08)',
        glow: '0 22px 80px rgb(17 183 200 / 0.18)',
      },
      borderRadius: {
        trace: '8px',
      },
    },
  },
} satisfies Config
