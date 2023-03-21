module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  parserOption: {
    ecmaFeatur: {
      jsx: true,
    },
    ecmaVertoin: 2018,
    sourceType: "module",
  },
  setting: {
    react: {
      vertion: "18.2.0",
    },
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-cope": 0,
    "react/jsx-uses-react": 0,
    "react/props-types": 0,
  },
};
