/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FDFBF7',
          soft: '#F7F2EA',
          warm: '#EFE7DA',
        },
        blush: {
          light: '#F9EFEA',
          DEFAULT: '#E6CFC6',
          deep: '#C99E8E',
        },
        gold: {
          light: '#DFC7A7',
          DEFAULT: '#B8925A',
          dark: '#93703B',
        },
        charcoal: {
          DEFAULT: '#241F1C',
          muted: '#695E56',
          light: '#9A8E85',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px -12px rgba(36, 31, 28, 0.08)',
        gold: '0 10px 30px -10px rgba(184, 146, 90, 0.25)',
      },
    },
  },
  plugins: [],
};
