import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
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
      backgroundColor: {
        'background': '#FDF8EE',
        'secondary': '#4D2C5E',
      },
      colors: {
        'primary': '#FF7426',
        'secondary': '#4D2C5E',
        'background': '#FDF8EE',
        'light-gray': '#8A8A8A',
      },
    },
  },
  plugins: [
	require('@tailwindcss/typography')],
} satisfies Config;
