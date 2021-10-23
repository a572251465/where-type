const path = require('path')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const { babel } = require('@rollup/plugin-babel')
const { terser } = require('rollup-plugin-terser')

const resolvePath = (url) => path.resolve(__dirname, url)

module.exports = {
  input: resolvePath('../src/index.js'),
  output: {
    file: resolvePath('../dist/index.js'),
    format: 'cjs'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser()
  ]
}
