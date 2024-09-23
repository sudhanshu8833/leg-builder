module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {
        extend: {
          colors: {
            customBlue: 'rgb(11 97 155)',
            addLegBlueButton: {
                900: 'rgb(12 74 110)',
                800: 'rgb(6 64 100)'
            },
            toggleBlue: 'rgb(7 130 218)',
            boxColor: 'rgb(248 248 248)',
          },
        },
      },
    plugins: [],
  };