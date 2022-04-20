import peerDepsExternal from "rollup-plugin-peer-deps-external";
import localResolve from "rollup-plugin-local-resolve";
import multi from "@rollup/plugin-multi-entry";
import typescript from "@rollup/plugin-typescript";
import styles from "rollup-plugin-styles";
import { terser } from "rollup-plugin-terser";
import { babel } from "@rollup/plugin-babel";
import pkg from "./package.json";

const plugins = [
  styles(),
  typescript(),
  peerDepsExternal({ includeDependencies: true }),
  multi(),
  babel({ babelHelpers: "bundled" }),
  localResolve(),
  terser(),
];

const config = [
  {
    input: "./src/components/index.ts",
    output: {
      file: pkg.main,
      format: "esm",
      sourcemap: true,
      assetFileNames: "[name]-[hash][extname]",
    },
    plugins,
  },
];

export default config;
