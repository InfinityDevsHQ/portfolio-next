import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#fcc520",
        secondary: "#8a8fa3",
        muted: "#dce2ed",
        primaryYellow: "#feb633",
        secondaryDark: "#666666",
        primaryDark: "#32333C",
        background: "#fbfbfb",
        placeholderText: "#9ca3af",
      },
      spacing: {
        40: "2.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
