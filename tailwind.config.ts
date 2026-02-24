import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#C8641A',
        'brand-dark': '#1a1a1a',
        'brand-light': '#f5f5f5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#4b5563',
            h1: { color: '#111827' },
            h2: { color: '#111827', borderBottomColor: '#C8641A', paddingBottom: '0.5rem', borderBottomWidth: '2px' },
            h3: { color: '#1f2937' },
            h4: { color: '#374151' },
            strong: { color: '#111827' },
            a: { color: '#C8641A', '&:hover': { color: '#e07820' } },
            hr: { borderColor: '#e5e7eb' },
            blockquote: { borderLeftColor: '#C8641A', color: '#4b5563' },
            'ul > li::marker': { color: '#C8641A' },
            'ol > li::marker': { color: '#C8641A' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
