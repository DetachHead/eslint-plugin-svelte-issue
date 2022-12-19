module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  "extends": ["plugin:svelte/recommended", "plugin:eslint-comments/recommended"],
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["*.cjs"],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx', '.cts', '.mts' ],
      'espree': [ '.js', 'jsx', '.cjs', '.mjs' ],
    }
  },
  rules: {
    'svelte/html-self-closing':'error',
    'eslint-comments/require-description': 'error'
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ]
};
