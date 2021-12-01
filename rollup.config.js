// rollup.config.js
export default {
  input: 'src/index.js',
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
  ]
};
