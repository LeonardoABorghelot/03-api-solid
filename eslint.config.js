import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: ["node_modules", "dist"], // substitui o antigo .eslintignore
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "eqeqeq": ["error", "always"],
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      "no-useless-contructor": "off"
    }
  }
];
