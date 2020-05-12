import path from 'path';

import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import json from '@rollup/plugin-json';
import autoExternal from 'rollup-plugin-auto-external';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';

const rootDir = path.resolve(process.cwd(), '..', '..');
const resourceDir = path.resolve(rootDir, 'resources', 'main');

const getOutputFile = dir => {
  const extension = dir === 'server' ? '.mjs' : '.js';

  return path.resolve(resourceDir, dir, `index${extension}`);
};

const getPlugins = dir => {
  const isProduction = !(process.env.ROLLUP_WATCH === 'true');
  const isServerSide = dir === 'server';

  return [
    eslint({
      throwOnError: true,
      throwOnWarning: isProduction,
      include: './src/**/*'
    }),
    typescript({
      tsconfig: 'tsconfig.json'
    }),
    isServerSide && autoExternal({
			builtins: false,
			peerDependencies: false,
		}),
    resolve({ preferBuiltins: true }),
    builtins(),
    json(),
    isProduction && terser()
  ].filter(Boolean);
};

export default ['client', 'server'].map(dir => ({
  input: path.resolve('src', dir, 'index.ts'),
  output: {
    name: dir,
    file: getOutputFile(dir)
  },
  external: ['alt-server', 'alt-client', 'natives'],
  plugins: getPlugins(dir)
}));
