module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  theme: {
    colors: {
      'black': '#27272a',
      'grey-dark': '#696969',
      'grey-light': '#e5e7eb',
      'white': '#fcfbfa',
      'lavender': '#7e3af2',
      'lavender-dark': '#6c2bd9',
      'lavender-light': '#9747ff',
      'red': '#e02424',
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: (theme) => ({
        main: "url('/home/ekaterina/internship/game/src/assets/Background.svg')",
      }),
    },
    screens: {
      'phone': '320px',
      'tablet': '792px',
      'desktop': '1280px',
    },
  },
}
