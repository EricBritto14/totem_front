/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Para projetos TypeScript
    "./public/index.html"          // Dependendo do seu setup, ajuste conforme necessário
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}