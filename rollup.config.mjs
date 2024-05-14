import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import {exec} from 'child_process';
import path from 'path';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg-import';
import typescript from 'rollup-plugin-typescript2';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', 'ts', 'tsx', '.json', '.sass', '.scss', 'css'],
});
const projectRootDir = path.resolve(__dirname);

// alias를 설정한 경우, typescript 파일에서 타입들이 정상적으로 내보내기가 안되는 문제로 추가
const tscAlias = () => {
  return {
    name: 'tsAlias',
    writeBundle: () => {
      return new Promise((resolve, reject) => {
        exec('tsc-alias', function callback(error, stdout, stderr) {
          if (stderr || error) {
            reject(stderr || error);
          } else {
            resolve(stdout);
          }
        });
      });
    },
  };
};

export default [
  {
    input: 'src/index.ts', // 라이브러리의 진입점
    output: [
      {
        file: 'dist/index.cjs.js', // CommonJS 형태로 빌드 결과
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js', // ESM 형태로 빌드 결과
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      // 플러그인 설정
      alias({
        entries: [
          {
            find: '@src',
            replacement: path.resolve(projectRootDir, 'src'),
          },
          {
            find: '@assets',
            replacement: path.resolve(projectRootDir, 'src/assets'),
          },
          {
            find: '@components',
            replacement: path.resolve(projectRootDir, 'src/components'),
          },
          {
            find: '@utils',
            replacement: path.resolve(projectRootDir, 'src/utils'),
          },
        ],
        customResolver,
      }),
      resolve(),
      postcss({
        extensions: ['.css'],
        inject: true,
      }),
      peerDepsExternal(),
      commonjs(),
      typescript({tsconfig: './tsconfig.json'}),
      terser(),
      svg({
        stringify: true,
      }),
      tscAlias(),
    ],
  },
  {
    input: 'dist/index.d.ts',
    output: [{file: 'dist/index.d.ts', format: 'esm'}],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
