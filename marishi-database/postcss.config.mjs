/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // '@tailwindcss/postcss'를 'tailwindcss'로 변경
    autoprefixer: {},
  },
};

export default config;