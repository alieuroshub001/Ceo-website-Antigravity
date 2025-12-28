/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                foreground: "#ffffff",
                accent: "#17b6b2", // Teal updated by user request
                primary: "#17b6b2", // Mapped to accent for ChatWidget
                "primary-dark": "#139190", // Darker teal for hover states
                muted: "#242A3D", // Dark Blue-Grey from research
            },
            fontFamily: {
                sans: ['Century Gothic', 'Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
