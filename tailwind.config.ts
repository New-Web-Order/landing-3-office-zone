import type { Config } from "tailwindcss"

// const config = {

module.exports ={
// darkMode: ['class', '[data-theme="dark"]'],

darkMode: 'class',

content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{ts,tsx}',

  ],

  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // shadcn colors 
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },


        // my colors 


        "bg-1000":"#F0F0F0",
        "bg-100":"#202020",
        "bg-200":"#646464",
        "bg-1200":"#ededed",
        "bg-300":"#767D74",
        "bg-900":"#F0F0F0",
        "bg-800":"#E0E0E0",
        "primary-1200":"#171717",
        "primary-600":"#56468B",
        "primary-300":"#7D66D9",
        "primary-100":"#EDE0D9",

        // color generator colors 
        "bg-default": "var(--bg-default)",
        "bg-base": "var(--bg-base)",
        "bg-bg-subtle": "var(--bg-bg-subtle)",
        "bg-bg": "var(--bg-bg)",
        "bg-bg-hover": "var(--bg-bg-hover)",
        "bg-bg-active": "var(--bg-bg-active)",
        "fg-line": "var(--fg-line)",
        "fg-border": "var(--fg-border)",
        "fg-border-hover": "var(--fg-border-hover)",
        "fg-solid": "var(--fg-solid)",
        "fg-solid-hover": "var(--fg-solid-hover)",
        "fg-text": "var(--fg-text)",
        "fg-text-contrast": "var(--fg-text-contrast)",
        "fg-default": "var(--fg-default)",
      
      
        "primary-base": "var(--primary-base)",
        "primary-bg-subtle": "var(--primary-bg-subtle)",
        "primary-bg": "var(--primary-bg)",
        "primary-bg-hover": "var(--primary-bg-hover)",
        "primary-bg-active": "var(--primary-bg-active)",
        "primary-line": "var(--primary-line)",
        "primary-border": "var(--primary-border)",
        "primary-border-hover": "var(--primary-border-hover)",
        "primary-solid": "var(--primary-solid)",
        "primary-solid-hover": "var(--primary-solid-hover)",
        "primary-text": "var(--primary-text)",
        "primary-text-contrast": "var(--primary-text-contrast)",
      },

      saturate:{
        25:".25"
      },

      fontFamily: {
        sans: ['var(--font-k2d)'],
      },


      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

// export default config






