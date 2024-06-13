import type { Config } from "tailwindcss";
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    primarioMuyOscuro: "#BA7B61",
    primarioOscuro: "#BE9065",
    primarioSemiOscuro: "#D9AB75",
    primarioPrincipal: "#EAD196",
    primarioClaro: "#F3EDC8",
    primarioMuyClaro: "#F8F6EC",
    secundarioOscuro: "#415602",
    secundarioPrincipal: "#96AC60",
    secundarioClaro: "#D3DDA8",
    terciarioOscuro: "#511018",
    terciarioPrincipal: "#7D0A0A",
    terciarioClaro: "#BF3131",
    gris1: "#36312F",
    gris2: "#6C635D",
    gris3: "#9E958F",
    gris4: "#CDC8C5",
    gris5: "#E6E4E2",
    gris6: "#F3F1F0",
  },
};

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        mouseSlider: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(170%)" },
        },
      },
      fontFamily: {
        vangeda: ["var(--font-vangeda)"],
        bricolage: ["var(--font-bricolage)"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "mouse-slider": "mouseSlider 5s ease-in-out infinite",
      },
      colors: {
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
        ...colors,
        stroke: {
          ...colors,
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  variants: {
    extend: {
      stroke: ["hover", "group-hover"],
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
