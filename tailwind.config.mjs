/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        'card-shadow':
          '0 1px 0 1px #00000005, 0 4px 6px #00000005, inset 0 0 0 6px #111',
      },
    },
  },
  plugins: [],
}
