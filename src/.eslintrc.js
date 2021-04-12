module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-use-before-define": "off",
    quotes: ["warn", "double"],
    "react/no-array-index-key": "off",
    "no-unused-vars": "warn",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/no-unresolved": "warn",
    "import/extensions": ["warn", "never"],
    "import/no-extraneous-dependencies": "off",
    "react/require-default-props": "off",
    "react/no-unused-prop-types": "warn",
    "react/jsx-props-no-spreading": "off",
    "prefer-const": "warn",
    indent: ["error", 2],
    "react/destructuring-assignment": "warn",
    "react/no-unescaped-entities": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "global-require": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
