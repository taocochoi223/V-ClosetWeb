/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDFBF7', // Trắng kem
        card: '#F5F3EB',       // Kem đậm hơn
        text: '#3E2723',       // Nâu đen
        primary: '#4A3B32',    // Nâu đậm cho button
        primaryHover: '#5C4A3F',
        success: '#2E7D32',    // Xanh lá báo cáo
        danger: '#C62828',     // Đỏ cảnh báo
        border: '#E8E3D7'
      }
    },
  },
  plugins: [],
}
