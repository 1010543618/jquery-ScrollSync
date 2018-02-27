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
  }
};
