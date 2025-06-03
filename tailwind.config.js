/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/dist/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
      grayscale: {
        50: '50%',
        100: '100%'
      },
      opacity : {
        91: '91%',
        50: '50%'
      }
    },

    plugins: [
      require("daisyui"),
    ],
    
  }
  

