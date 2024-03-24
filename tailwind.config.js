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
      presets: {
        "my-heading": ["font-bold", "text-3xl", "text-blue-700"], // Example classes
      },
      colors: {
        JBlue: {
          50: "#eef3ff",
          100: "#dfe9ff",
          200: "#c6d4ff",
          300: "#a3b8fe",
          400: "#7e91fb",
          500: "#606cf4",
          600: "#4344e8",
          700: "#3735cd",
          800: "#2e2ea5",
          900: "#2f318b",
          950: "#1a1a4c",
        },
        JRed: {
          50: "#fff0f1",
          100: "#ffdde0",
          200: "#ffc1c6",
          300: "#ff959e",
          400: "#ff5967",
          500: "#ff2638",
          600: "#fc061a",
          700: "#e60013",
          800: "#af0513",
          900: "#900c17",
          950: "#500007",
        },
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
