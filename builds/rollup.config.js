const path = require('path')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const ts = require('@rollup/plugin-typescript')
const { babel } = require('@rollup/plugin-babel')
const { terser } = require('rollup-plugin-terser')
const del = require('rollup-plugin-del')

const resolvePath = (url) => path.resolve(__dirname, url)

module.exports = {
  input: resolvePath('../src/index.ts'),
  output: [
    {
      file: resolvePath('../dist/index.cjs.js'),
      format: 'cjs',
      exports: 'default'
    },
    {
      file: resolvePath('../dist/index.esm.js'),
      format: 'esm',
      exports: 'default'
    }
  ],
  plugins: [
    del(),
    ts(),
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser()
  ]
}
