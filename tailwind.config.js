module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: (theme) => theme("colors"),
    textColor: {
      primary: "#4b5d68",
      secondary: "#212353",
      softgray: "#4b5d68",
    },

    extend: {
      backgroundImage: (theme) => ({
        "pink-bg": "url('/images/pink-bg.svg')",
      }),
      flex: {
        2: "0 0 calc(100%/2)",
      },
      maxWidth: {
        2: "max-w-[calc(100%/2)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
