module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      /* {
        mytheme: {
          primary: "#03A9F4",
          secondary: "#26A69A",
          accent: "#FF4081",
          neutral: "#1D1627",
          "base-100": "#EBE8ED",
          info: "#448AFF",
          success: "#4CAF50",
          warning: "#FFC107",
          error: "#FF5252",
        },
      }, */
      "light",
      // "pastel",
    ],
  },
};
