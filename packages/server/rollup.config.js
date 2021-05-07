import path from 'path';

import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import { eslint } from 'rollup-plugin-eslint';
import autoExternal from 'rollup-plugin-auto-external';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

const isProduction = !(process.env.ROLLUP_WATCH === 'true');
const rootDir = path.resolve(process.cwd(), '../..');

export default {
  input: 'src/index.ts',
  output: {
    file: path.resolve(rootDir, 'resources/core/server/index.js'),
  },
  external: ['alt-server'],
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: isProduction,
      include: './src/**/*.ts',
    }),
    typescript(),
    json({ compact: isProduction }),
    injectProcessEnv({
      NODE_ENV: isProduction ? 'production' : 'development',
    }),
    autoExternal(),
  ],
}
