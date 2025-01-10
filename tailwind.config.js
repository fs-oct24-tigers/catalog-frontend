/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

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
      fontFamily: {
        mont: ['"Mont"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: ['48px', { lineHeight: '56px', letterSpacing: '-0.01em' }],
        h1Mobile: ['32px', { lineHeight: '41px', letterSpacing: '-0.01em' }],
        h2: ['32px', { lineHeight: '41px', letterSpacing: '-0.01em' }],
        h2Mobile: ['20px', { lineHeight: '26px', letterSpacing: '0' }],
        h3: ['22px', { lineHeight: '31px', letterSpacing: '0' }],
        h3Mobile: ['20px', { lineHeight: '26px', letterSpacing: '0' }],
        h4: ['20px', { lineHeight: '26px', letterSpacing: '0' }],
        h4Mobile: ['16px', { lineHeight: '20px', letterSpacing: '0' }],
        button: ['14px', { lineHeight: '21px', letterSpacing: '0' }],
        body: ['14px', { lineHeight: '21px', letterSpacing: '0' }],
        small: ['12px', { lineHeight: '15px', letterSpacing: '0' }],
        uppercase: ['12px', { lineHeight: '11px', letterSpacing: '0.04em' }],
      },
      maxWidth: {
        xl: '1136px',
      },
      container: {
        center: true,
        screens: {
          'sm': '600px',
          'md': '700px',
          'lg': '900px',
          'xl': '1136px',
          '2xl': '1400px',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'swing': 'swing 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
