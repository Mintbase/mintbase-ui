import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import url from '@rollup/plugin-url'
import summary from 'rollup-plugin-summary'
import packageJson from './package.json'

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: packageJson.name,
        inlineDynamicImports: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        inlineDynamicImports: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      postcss({
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
      url(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      summary(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [
      { file: 'dist/index.d.ts', format: 'esm', inlineDynamicImports: true },
    ],
    external: [/\.css$/],
    plugins: [dts()],
  },
]

export default config
