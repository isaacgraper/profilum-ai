/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)', 'sans-serif'],
                libre: ['var(--font-libre)', 'serif'],
            },
            colors: {
              primary: '',
              secondary: '',
              background: '',
              accent: '',
            },
        },
    },
    plugins: [],
};
