/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    fontFamily: {
      'heading': ["Futura"],
      'sans': ["Avenir", "sans-serif"],
      'mono': ["JetBrains Mono NL"],
    },
    extend: {
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

