// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'es'
    },
    {
      name: "ReactComponent",
      file: 'dist/index.umd.js',
      format: 'umd'
    },
  ],
  plugins: [
    typescript()
  ]
};
