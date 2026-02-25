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
        accent: '#2563EB',
        'accent-hover': '#1D4ED8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#555555',
            maxWidth: '680px',
            h1: { color: '#1A1A1A', fontWeight: '600' },
            h2: { color: '#1A1A1A', fontWeight: '600' },
            h3: { color: '#1A1A1A', fontWeight: '500' },
            h4: { color: '#1A1A1A' },
            strong: { color: '#1A1A1A' },
            a: { color: '#2563EB', textDecoration: 'underline', '&:hover': { color: '#1D4ED8' } },
            hr: { borderColor: '#E5E5E5' },
            blockquote: { borderLeftColor: '#2563EB', color: '#555555' },
            'ul > li::marker': { color: '#2563EB' },
            'ol > li::marker': { color: '#2563EB' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
