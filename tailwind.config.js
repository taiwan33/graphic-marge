const lineClamp = require("@tailwindcss/line-clamp");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "400px",
      },
      colors: {
        background: {
          solid: "#E5E5E5",
          dark_paper: "#F2F4F5",
          active: "#F1F5FB",
          light: "#FAFAFA",
        },
        lightBorder: "#ECECEC",
        extralightBorder: "#E8E9EB",
        primary: {
          red: "#EE1D23",
          blue: "#0E4CA0",
          green: "#1EA480",
        },
        text: {
          DEFAULT: "#333333",
          primary: "#1A1A1A",
          tertiary: "#575757",
          paragraph: "#4D5461",
        },
      },
      fontFamily: {
        Berkshire: "'Berkshire Swash', cursive",
        Calistoga: "'Calistoga', cursive",
        Rakkas: "'Rakkas', cursive;",
        Acme: "'Acme', sans-serif",
        Aladin: "'Aladin', cursive",
        Bree: "'Bree Serif', serif",
        Fondamento: "'Fondamento', cursive",
        ganga: ["Ganga", "sans-serif"],
        Palanquin: "'Palanquin Dark', sans-serif",
        Bakbak: "'Bakbak One', cursive",
        Yatra: "'Yatra One', cursive",
        Poppins: "'Poppins', sans-serif",
        Laila: "'Laila', sans-serif",
        Kalam: "'Kalam', cursive",
        Asar: "'Asar', serif",
        Martel: "'Martel', serif",
      },
      spacing: {
        100: "27rem",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
