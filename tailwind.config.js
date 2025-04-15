/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode Palette
        'light-bg': '#f8fafc', // Very light gray (almost white)
        'light-text': '#1e293b', // Dark slate
        'light-primary': '#06b6d4', // Vibrant cyan
        'light-secondary': '#f59e0b', // Warm amber
        'light-accent': '#ec4899', // Pink for highlights
        'light-card': '#ffffff', // White for cards/surfaces
        'light-border': '#e2e8f0', // Light gray border

        // Dark Mode Palette
        'dark-bg': '#0f172a', // Dark slate blue
        'dark-text': '#e2e8f0', // Light gray
        'dark-primary': '#22d3ee', // Lighter cyan
        'dark-secondary': '#fbbf24', // Lighter amber
        'dark-accent': '#f472b6', // Lighter pink
        'dark-card': '#1e293b', // Dark slate for cards/surfaces
        'dark-border': '#334155', // Mid-gray border
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scale-up-hover': 'scaleUp 0.2s ease-out forwards',
        'gradient-shift': 'gradientShift 5s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: { // Used for hover effects, hence no 'forwards' needed implicitly
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.light-text'),
            a: {
              color: theme('colors.light-primary'),
              '&:hover': {
                color: theme('colors.light-secondary'),
              },
            },
            // Add more typography styles as needed
          },
        },
        dark: { // Define dark mode typography overrides
          css: {
            color: theme('colors.dark-text'),
            a: {
              color: theme('colors.dark-primary'),
              '&:hover': {
                color: theme('colors.dark-secondary'),
              },
            },
            // Add more dark mode typography styles
            h1: { color: theme('colors.dark-text') },
            h2: { color: theme('colors.dark-text') },
            h3: { color: theme('colors.dark-text') },
            h4: { color: theme('colors.dark-text') },
            strong: { color: theme('colors.dark-text') },
            blockquote: { color: theme('colors.slate.400') },
          }
        }
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide')
  ],
};
