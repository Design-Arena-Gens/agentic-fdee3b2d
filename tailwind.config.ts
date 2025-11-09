import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C5CFF",
          foreground: "#F5F4FF",
          dark: "#5B3AF7"
        },
        secondary: {
          DEFAULT: "#00E5B0",
          foreground: "#00332A"
        },
        surface: {
          DEFAULT: "#0E0E12",
          elevated: "#16161F",
          border: "#2D2D3A",
          accent: "#1E1E2E"
        },
        flux: {
          pink: "#F368E0",
          teal: "#1DD1A1",
          amber: "#FF9F43",
          cyan: "#48DBFB"
        }
      },
      boxShadow: {
        "glow-primary": "0 0 45px 0 rgba(124, 92, 255, 0.45)",
        "glow-teal": "0 0 60px 0 rgba(29, 209, 161, 0.35)"
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "flux-radial":
          "radial-gradient(circle at 20% 20%, rgba(124,92,255,0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(29,209,161,0.2), transparent 45%), radial-gradient(circle at 90% 70%, rgba(72,219,251,0.22), transparent 55%)"
      },
      fontFamily: {
        sans: ["var(--font-primary)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace"]
      }
    }
  },
  plugins: []
};

export default config;
