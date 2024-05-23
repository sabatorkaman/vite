/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'em': '340px',
        'sm': '450px',
        // => @media (min-width: 640px) { ... }
        'md': '880px',
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}

