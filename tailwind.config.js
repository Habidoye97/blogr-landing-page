/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'vsm': {'max': '639px'},
      'sm': '640px',
      'md': '768px',
      'max': {'max': '970px'},
      'mmd': '970px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'overpass':['Overpass'],
      'ubuntu': ['Ubuntu']
    },
    extend: {
      keyframes: {
        slide_in_out: {
          '0%': {
            transform: 'translateY(-1000px)',
                    
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
                    
            opacity: '1',
          }
        },
        roll_in_blurred_right: {
          '0%': {
            transform: 'translateX(1000px) rotate(720deg)',
            filter: 'blur(50px)',
            opacity: '0',
          },
          '100%': {
            
            transform: 'translateX(0) rotate(0deg)',
            filter: 'blur(0)',
            opacity: '1',
          }
        },
        roll_out_blurred_right: {
          '0%': {
            
            transform: 'translateX(0) rotate(0deg)',
            
            filter: 'blur(0)',
            opacity: '1'
          },
          '100%': {
            
            transform: 'translateX(1000px) rotate(720deg)',
            
            filter: 'blur(50px)',
            opacity: '0',
          }
        }
      },
      animation: {
        slide_in_out : 'slide_in_out 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        roll_in_blurred_right: 'roll_in_blurred_right 0.65s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        roll_out_blurred_right: 'roll_out_blurred_right 0.65s cubic-bezier(0.755, 0.050, 0.855, 0.060) both',

      },


    },
  },
  plugins: [],
}
