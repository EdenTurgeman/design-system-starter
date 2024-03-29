import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import typescript from "@rollup/plugin-typescript";
import packageJson from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'esm',
    },
    {
      format: 'esm',
      dir: 'lib',
      preserveModules: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    postcss({
      extract: false,
    }),
    typescript()
],
};
