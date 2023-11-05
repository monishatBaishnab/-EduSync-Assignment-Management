const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-mono": "'DM Mono', monospace"
      },
      colors: {
        'light-orange': '#FBBE36',
        'dark-gray': '#142C44'
      },
      backgroundImage: {
        'hero': "url('/hero-pattern.jpg')",
        'faq': "url('/faq-pattern.png')",
      }
    },
  },
  plugins: [],
});