import resolve from 'rollup-plugin-node-resolve';
export default {
  input: "index",
  external: ['jquery'],
  output: {
    extend: true,
    name: "$.fn",
    file: 'dist/jquery.scrollsync.js',
    format: 'umd',
    globals: {
      jquery: '$'
    }
  },
  plugins: [ resolve() ]
};
