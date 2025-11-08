import eslint from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import astroPlugin from "eslint-plugin-astro";

export default [
  eslint.configs.recommended,
  ...astroPlugin.configs.recommended,
  {
    files: ["**/*.{js,mjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: "module",
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
  },
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      ".astro/**",
      "**/*.scss",
      "**/*.css",
    ],
  },
];
