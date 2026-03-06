const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginReactNative = require("eslint-plugin-react-native");

module.exports = defineConfig([
  expoConfig,
  {
    plugins: {
      "react-native": eslintPluginReactNative,
    },
    rules: {
      "react-native/no-unused-styles": "error",
      "react-native/no-inline-styles": "error",
    },
  },
]);
