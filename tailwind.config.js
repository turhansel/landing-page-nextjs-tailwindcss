module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: (theme) => theme("colors"),
    textColor: {
      primary: "#4b5d68",
      secondary: "#212353",
      danger: "#e3342f",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
