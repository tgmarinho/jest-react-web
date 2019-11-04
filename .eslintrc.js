module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:jest/recommended",
    "plugin:jest/style"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["jest", "react", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "no-console": ["error", { allow: ["tron"] }],
    "no-param-reassign": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off",
    "no-underscore-dangle": "off",
    camelcase: "off"
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      }
    }
  }
};
