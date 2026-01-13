import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Modern vibrant colors
        violet: {
          DEFAULT: "hsl(var(--violet))",
          muted: "hsl(var(--violet-muted))",
          bright: "hsl(var(--violet-bright))",
        },
        cyan: {
          DEFAULT: "hsl(var(--cyan))",
          muted: "hsl(var(--cyan-muted))",
          bright: "hsl(var(--cyan-bright))",
        },
        rose: {
          DEFAULT: "hsl(var(--rose))",
          muted: "hsl(var(--rose-muted))",
          bright: "hsl(var(--rose-bright))",
        },
        amber: {
          DEFAULT: "hsl(var(--amber))",
          muted: "hsl(var(--amber-muted))",
          bright: "hsl(var(--amber-bright))",
        },
        emerald: {
          DEFAULT: "hsl(var(--emerald))",
          muted: "hsl(var(--emerald-muted))",
          bright: "hsl(var(--emerald-bright))",
        },
        // Legacy colors for backwards compatibility
        gold: {
          DEFAULT: "hsl(var(--gold))",
          muted: "hsl(var(--gold-muted))",
          bright: "hsl(var(--gold-bright))",
        },
        charcoal: {
          DEFAULT: "hsl(var(--charcoal))",
          deep: "hsl(var(--charcoal-deep))",
          light: "hsl(var(--charcoal-light))",
        },
        stone: {
          DEFAULT: "hsl(var(--stone))",
          dark: "hsl(var(--stone-dark))",
        },
        cream: "hsl(var(--cream))",
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'glow': 'var(--shadow-glow)',
        'cyan': 'var(--shadow-cyan)',
        'rose': 'var(--shadow-rose)',
        'amber': 'var(--shadow-amber)',
        'gold': 'var(--shadow-gold)',
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
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--violet) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--violet) / 0.5), 0 0 60px hsl(var(--rose) / 0.3)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "shimmer": "shimmer 3s infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "gradient-x": "gradient-x 3s ease infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, hsl(var(--violet)) 0%, hsl(var(--rose)) 100%)',
        'gradient-cool': 'linear-gradient(135deg, hsl(var(--cyan)) 0%, hsl(var(--violet)) 100%)',
        'gradient-warm': 'linear-gradient(135deg, hsl(var(--amber)) 0%, hsl(var(--rose)) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;