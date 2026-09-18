/* Build: npx -y tailwindcss@3 -c tailwind.config.js -i src/input.css -o assets/css/styles.css --minify */
module.exports = {
  content: ['./index.html'],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        // Identidade "Cacau & Rosé": marfim + rosé antigo + cacau, com dourado champagne como destaque
        ivory: { DEFAULT: '#FBF7F2', 2: '#F4ECE4' },
        rose: {
          50: '#FAF0EE', 100: '#F3DEDA', 200: '#E9C7C1', 300: '#DCA9A2',
          400: '#C98880', 500: '#B06A65', 600: '#8F4F4D',
        },
        cocoa: { 950: '#1B1014', 900: '#2A1A1F', 800: '#3A2429', 700: '#4D3238' },
        gold: { 300: '#E6D3A8', 400: '#D8BC84', 500: '#C6A15C', 600: '#A8834A' },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { widest2: '0.22em' },
    },
  },
};
