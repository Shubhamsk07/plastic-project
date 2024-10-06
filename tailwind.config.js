/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'color1': '#055AA1',
                'color2': '#1B263B',
                'btn1': '#E40C10',


            },
            backgroundImage: {
                'custom-bg': "url('./desktop.png')",
            }
        },
    },
    plugins: [],
}