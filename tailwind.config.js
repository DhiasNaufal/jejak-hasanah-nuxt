/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        JH: {
          red: "#E60013",
          blue: "#2F318B",
          black: "#1D1A1A",
          grey: "#9F9FA0",
        },
      },
      fontFamily: {
        dms: ['"Open Sans", sans-serif'],
        dsp: ['"Fugaz One", sans-serif'],
        sans: ['"Open Sans", sans-serif'],
      },
    },
  },
  plugins: [],
};
