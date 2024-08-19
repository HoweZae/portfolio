/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        'heading': ["Futura"],
        'sans': ["Avenir"],
        'mono': ["JetBrains Mono NL"],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
}

