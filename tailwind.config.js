/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
     
      keyframes: {
        moveup: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
        },
          '100%': { 
            transform: 'translateY(0px)',
            opacity:'1'
          },
        },
      },
      animation: {
        'anim': 'moveup 0.5s linear forwards',
        'anim2': 'moveup 0.9s linear forwards',
        'anim3': 'moveup 1.2s linear forwards',
        
        
      },
    },
  },
  plugins: [],
}
