/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        kid: ['Comic Sans MS', 'Baloo 2', 'cursive'],
      },
      colors: {
        primary: '#FFD93D',
        secondary: '#FF6B6B',
        success: '#6BCB77',
        info: '#4D96FF',
      },
    },
  },
  plugins: [],
}
