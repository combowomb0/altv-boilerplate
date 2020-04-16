import path from 'path';
import { eslint } from 'rollup-plugin-eslint';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';

const rootDir = path.resolve(process.cwd(), '..', '..');
const resourceDir = path.resolve(rootDir, 'resources', 'main');

const getOutputFile = dir => {
  const extension = dir === 'server' ? '.mjs' : '.js';

  return path.resolve(resourceDir, dir, `index${extension}`);
};

const getPlugins = () => {
  const isWatchMode = process.env.ROLLUP_WATCH === 'true';

  return [
    eslint({
      throwOnError: true,
      throwOnWarning: !isWatchMode,
      include: './src/**/*'
    }),
    typescript({
      tsconfig: 'tsconfig.json'
    }),
    resolve({ preferBuiltins: true }),
    builtins(),
    json(),
    !isWatchMode && terser()
  ];
};

export default ['client', 'server'].map(dir => ({
  input: path.resolve('src', dir, 'index.ts'),
  output: {
    name: dir,
    file: getOutputFile(dir)
  },
  external: ['alt-server', 'alt-client', 'natives'],
  plugins: getPlugins()
}));
