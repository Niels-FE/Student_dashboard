module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
    "./src/*.{html,js,jsx}",
    "./public/index.html"],
  darkMode: 'media',
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      "0": "0",
      "2": "2",
    },
    screens: {
      sm: "420px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
