import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-1000":"#F0F0F0",
        "bg-100":"#202020",
        "bg-200":"#646464",
        "bg-1200":"#FCFCFC",
        "bg-300":"#767D74",
        "bg-900":"#F0F0F0",
        "bg-800":"#E0E0E0",
        "primary-1200":"#141110",
        "primary-600":"#56468B",
        "primary-300":"#7D66D9",
        "primary-100":"#EDE0D9",
      },
      fontFamily: {
        sans: ['var(--font-k2d)'],
      },

    },
  },
  plugins: [],
};
export default config;
