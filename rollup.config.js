export default {
  input: "index",
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
