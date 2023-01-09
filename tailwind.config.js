const colors = require('tailwindcss/colors');
module.exports = {
    content: ['./{pages,app}/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: colors.green,
            },
        },
    },
    plugins: [],
};
