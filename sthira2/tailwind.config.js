/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backgroundColor:"#eae7dc",
        backgroundColor2:'#e85a47',
        lightText:"#2F4F4F",
        brightColor:"#F7941D",
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

