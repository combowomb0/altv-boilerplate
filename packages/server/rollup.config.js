import path from 'path';

import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import json from '@rollup/plugin-json';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import autoExternal from 'rollup-plugin-auto-external';

const isProduction = !(process.env.ROLLUP_WATCH === 'true');
const rootDir = path.resolve(process.cwd(), '..', '..');
const resourceDir = path.resolve(rootDir, 'resources', 'main');

const plugins = [
  eslint({
    throwOnError: true,
    throwOnWarning: isProduction,
    include: './src/**/*'
  }),
  typescript({
    tsconfig: 'tsconfig.json'
  }),
  autoExternal({
    builtins: false,
    peerDependencies: false,
  }),
  resolve({ preferBuiltins: true }),
  builtins(),
  json(),
  isProduction && terser(),
];

export default {
  input: 'src/index.ts',
  output: {
    file: path.resolve(resourceDir, 'server', 'index.mjs'),
  },
  external: ['alt-server'],
  plugins,
}
