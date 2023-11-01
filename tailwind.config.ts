import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "proba": "var(--proba-szin)",
        "prezitext": "var(--prezitext)",
        primary: "var(--primary)",
        "primitives-colour-functional-orange":
          "var(--primitives-colour-functional-orange)",
        "primitives-colour-grey-200": "var(--primitives-colour-grey-200)",
        "primitives-colour-grey-400": "var(--primitives-colour-grey-400)",
        "tokens-border-border": "var(--tokens-border-border)",
        "tokens-border-border-disabled": "var(--tokens-border-border-disabled)",
        "tokens-border-light-divider": "var(--tokens-border-light-divider)",
        "tokens-input-input-field-dark-surface":
          "var(--tokens-input-input-field-dark-surface)",
        "tokens-input-input-field-light-surface":
          "var(--tokens-input-input-field-light-surface)",
        "tokens-surface-card-surface": "var(--tokens-surface-card-surface)",
        "tokens-text-brand-grey": "var(--tokens-text-brand-grey)",
        "tokens-text-text-hover": "var(--tokens-text-text-hover)",
        "tokens-text-text-primary": "var(--tokens-text-text-primary)",
        "tokens-text-text-success": "var(--tokens-text-text-success)",
        "tokens-text-text-warning": "var(--tokens-text-text-warning)",
      },
      fontFamily: {
        "body-text": "var(--body-text-font-family)",
        "desktop-body": "var(--desktop-body-font-family)",
        "desktop-body-price": "var(--desktop-body-price-font-family)",
        "desktop-bold": "var(--desktop-bold-font-family)",
        "desktop-h1": "var(--desktop-h1-font-family)",
        "desktop-h2": "var(--desktop-h2-font-family)",
        "desktop-h3": "var(--desktop-h3-font-family)",
        "desktop-label": "var(--desktop-label-font-family)",
      },
      boxShadow: {
        "card-ds": "var(--card-ds)",
        "icon-ds": "var(--icon-ds)",
      },
    },
  },
  plugins: [],
} satisfies Config;