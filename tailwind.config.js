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
                muted: "#242A3D", // Dark Blue-Grey from research
            },
            fontFamily: {
                sans: ['Century Gothic', 'Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
