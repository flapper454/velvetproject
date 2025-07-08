import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
        extend: {
          colors: {
            velvet: '#2a003f',
            neon: '#ff69b4',
            mist: '#e0b3d0',
          },
          fontFamily: {
            glam: ['"Playfair Display"', 'serif'],
          }
        }
      },
  plugins: [],
}
export default config