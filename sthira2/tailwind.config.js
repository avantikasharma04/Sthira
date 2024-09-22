/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backgroundColor:"#E6E6FA",
        backgroundColor2:'#f25278',
        lightText:"#2F4F4F",
        brightColor:"#98FF98",
        brightColor2:"#FFDAB9",
        hover:'#7851a9',
        chat1:'#ff9a8a',
        chat2:'#e6cdc5',
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"2rem",
          sm:"1rem"
        }
      }
    },
  },
  plugins: [],
}

