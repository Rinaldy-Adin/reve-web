/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                volkhov: ['volkhov', 'sans'],
                alt: ['Lato', 'sans-serif'],
            },
            colors: {
                RVGray: {
                    0: '#F0F0F0',
                    1: '#D9D9D9',
                    2: '#CBCBCB',
                    3: '#999999',
                    4: '#666666',
                },
                RVRed: {
                    1: '#CBB1B1',
                    2: '#BB8181',
                    3: '#A99492',
                },
            },
        },
    },
    plugins: [],
};
