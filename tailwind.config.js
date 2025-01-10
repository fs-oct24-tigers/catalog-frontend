/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        bodyBg: '#0F1121',
        heartGray: '#323542',
        heartHover: '#4A4D58',
        heartSelected: '#EB5757',
        cardBg: '#161827',
        lineGray: '#3B3E4A',
        btnPrimary: '#905BFF',
        btnHover: '#A378FF',
        btnSecondary: '#323542',
        textWhite: '#F1F2F9',
        textGray: '#75767F',

        btnBejge: '#FCDBC1',
        btnGreen: '#27AE60',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        

        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },

      maxWidth: {
        xl: '1136px',
      },
      container: {
        center: true, // Centers the container by default
        padding: '2rem', // Adds default padding
        screens: {
          'sm': '600px',
          'md': '700px',
          'lg': '900px',
          'xl': '1136px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
