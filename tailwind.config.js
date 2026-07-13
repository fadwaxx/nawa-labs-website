/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      colors: {
        background: '#E0D0D0',
        surface: '#D6C7C7',
        card: '#CEC0C0',

        primary: '#433535',
        muted: '#6E5C5C',

        accent: '#A67676',
        'accent-hover': '#956666',

        border: '#BDAAAA',
        'border-strong': '#A99292',
      },

      boxShadow: {
        soft: '0 20px 60px rgba(67, 53, 53, 0.10)',
        card: '0 12px 30px rgba(67, 53, 53, 0.08)',
      },

      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
      },
    },
  },

  plugins: [],
};