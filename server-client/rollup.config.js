import typescript from "@rollup/plugin-typescript";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from 'rollup-plugin-alias';
import json from '@rollup/plugin-json';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  input: './src/index.ts',   // 入口文件
  output: {
    file: './dist/bundle.js', // 输出文件
    format: 'esm',
  },
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, 'src') }, // 设置 @ 别名
      ]
    }),
    resolve({
      preferBuiltins: true,
      extensions: ["ts", "js"],
    }),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    commonjs(),   // 支持 CommonJS 格式的模块
    json(),
  ],
  external: ['path'],
};
