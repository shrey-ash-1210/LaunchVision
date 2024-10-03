module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: 'rgba(50, 88, 109, 0.6)' ,
        'dark-2': 'rgba(13, 25, 31, 0.6)' ,
        primary: '#07193D', // Adjust primary color if needed
      },
    },
  },
  plugins: [],
}
