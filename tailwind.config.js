module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    boxShadow: {
      card: '0 15px 30px -15px hsl(212, 60%, 80%)',
    },
    colors: {
      white: '#ffffff',
      'very-dark-blue': 'hsl(234, 12%, 34%)',
      'grayish-blue': 'hsl(229, 6%, 66%)',
      'very-light-gray': 'hsl(0, 0%, 98%)',
      red: 'hsl(0, 78%, 62%)',
      cyan: 'hsl(180, 62%, 55%)',
      orange: 'hsl(34, 97%, 64%)',
      blue: 'hsl(212, 86%, 64%)',
    },
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
