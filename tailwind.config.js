const colors = require('tailwindcss/colors');
module.exports = {
    content: ['./{pages,app,components}/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                ...colors,
                primary: colors.green,
                secondary: colors.sky,
            },
        },
    },
    plugins: [],
};
