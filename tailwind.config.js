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
    
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors:{
        'main': '#2e5893', 
        'notmain': '#9abd50',
      },


     },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
  
}
