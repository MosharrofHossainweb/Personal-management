/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 2s ease-out',
        'slide-in': 'slideIn 1.5s ease-out',
        'slide-right': 'slideRight 1.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      fontFamily: {
        'poppin': ['Poppins', 'sans-serif'],
        'Monserrat': ["Montserrat", "serif"], // Ensured the serif fallback
      },
      colors: {
        'primary': '#1E40AF', // Example primary color for consistent branding
        'secondary': '#9333EA', // Example secondary color
      },
      spacing: {
        '128': '32rem', // Added extended spacing options
        '144': '36rem',
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
};
