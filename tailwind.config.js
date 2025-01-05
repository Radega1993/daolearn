module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6CB6FF",
          DEFAULT: "#007BFF",
          dark: "#0056b3",
        },
        secondary: {
          light: "#FFE4B3",
          DEFAULT: "#FFB74D",
          dark: "#FF9800",
        },
        neutral: "#F3F4F6",
        dark: "#1F2937",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
