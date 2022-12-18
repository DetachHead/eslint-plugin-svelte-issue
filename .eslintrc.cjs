module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["*.cjs"],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx', '.cts', '.mts' ],
      'espree': [ '.js', 'jsx', '.cjs', '.mjs' ],
    }
  },
  rules: {
    "spaced-comment": "error"
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
