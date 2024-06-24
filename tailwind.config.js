/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        chillax : ["chillax", "sans-serif"],
        panchang : ["panchang", "sans-serif"]
      },
      colors :{
        'myWhite' : "#F8F8FF",
        "myBlack" : "#10100E",
        "myYellow" : "#FFFFE3",
        "myRed" : '#ED1D24',
        "myGrey" : '#E4E1E5'
      }
    },
  plugins: [],
}}