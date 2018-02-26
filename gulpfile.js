var gulp = require('gulp');
var exec = require('child_process').exec;
// var rollup = require('rollup');

gulp.task('build', () => {
  /*return rollup.rollup({
    input: 'index.js',
    external: ['jquery'],
    plugins: [
      rollupTypescript()
    ]
  }).then(bundle => {
    return bundle.write({
      extend: true,
      name: "$.fn",
      file: 'dist/jquery.scrollsync.js',
      format: 'umd',
      globals: {
        jquery: '$'
      }
    })
  });*/
  exec('rollup -c', function(err, stdout, stderr) {
    console.log(stderr);
  });
});

gulp.task('watch',function(){
    gulp.watch('./src/*.js', ['build']);
})

gulp.task('default', ['build', 'watch']);

