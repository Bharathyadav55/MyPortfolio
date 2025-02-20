/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#14131a",
        "card-primary": "#1c1b23",
        "btn-primary": "#3a3942",
        "btn-secondary": "#1c1b23",
        "text-primary": "#8b8a91",
        "text-secondary": "#79787f",
        "text-info": "#4f4f52",
        "text-highlight": "#fff",
      },
    },
  },
  plugins: [],
};
