/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purple60: '#FF7A00',
        purple65: '#1A64FF',
        purple70: '#FF9533',
        purple75: '#FFCA99',
        purple90: '#FFE4CC',
        purple95: '#FFF1E5',
        purple97: '#FFF7F0',
        purple99: '#FFFCFA',
        white90: '#E4E4E7',
        white95: '#F1F1F3',
        white97: '#F1F1F8',
        white99: '#FCFCFD',
        grey08: '#141414',
        grey10: '#1A1A1A',
        grey15: '#262626',
        grey20: '#333333',
        grey30: '#4D4D4D',
        grey40: '#666666',
        grey50: '#808080',
        grey60: '#999999',
      }
    },
  },
  plugins: [],
}

