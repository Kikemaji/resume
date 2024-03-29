import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: 'var(--text-color)',
        background: 'var(--background-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        border: 'var(--border-color)',
      },
      fontFamily: {
        heading: 'Noto Sans Malayalam',
        body: 'Noto Sans Malayalam',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      future: {
        hoverOnlyWhenSupported: true,
      },
    },
  },
  plugins: [],
};
export default config;
