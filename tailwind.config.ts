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

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        vangeda: ["var(--font-vangeda)"],
        bricolage: ["var(--font-bricolage)"],
      },
      colors: colors,
    },
  },
  plugins: [],
};
export default config;
