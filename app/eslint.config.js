import eslint from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,astro}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: "module",
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
  },
  {
    ignores: ["dist/**", "node_modules/**", ".astro/**"],
  },
];
