module.exports = {
  root: true,
  env: {
    es6: true,
    node: true, // This allows Node.js globals
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "off" // Turn off `no-undef` errors for module and require
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
