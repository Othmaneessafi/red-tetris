module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      // that is animation class
      animation: {
        fade: 'fadeOut 3s ease-in-out',
        move: 'moveLogo 3s ease-in-out'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        moveLogo: {
          '0%': { transform: 'translate(30%, 170%)' },
          '100%': { transform: 'translate(0%, 0%)' },
        },
      }),
    },
  },
  plugins: [],
}
