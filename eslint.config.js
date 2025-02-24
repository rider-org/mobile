import config from "@rider/packages/eslint/react/index.js";
import tseslint from "typescript-eslint";

export default tseslint.config(config, {
  rules: {
    "@typescript-eslint/no-require-imports": "off",
  },
});
