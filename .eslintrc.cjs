module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["plugin:svelte/recommended", "plugin:import/recommended"],
  plugins: ["svelte3", "@typescript-eslint"],
  ignorePatterns: ["*.cjs"],
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    project: "tsconfig.json",
    extraFileExtensions: [".svelte"],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
