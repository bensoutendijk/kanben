module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./express/tsconfig.json"
  },
  ignorePatterns: [".eslintrc.cjs"],
  rules: {
    // Add any project-specific rules or overrides here
    "prettier/prettier": "error"
  }
};
