// node@6.x
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const rimraf = require('rimraf');
const BrowserSync = require('browser-sync').create();
const webpack = require('webpack-stream');
const webpackConf = require('./webpack.config.js');
const historyApiFallback = require('connect-history-api-fallback');

const paths = {
  entry: './src/Index.tsx',
  dist: './dist',
  tsWatch: ['./src/**/**.ts', './src/**/**.tsx', './typings/**/**'],
  style: './styl/main.styl',
  stylWatch: ['./styl/**/*.styl'],
  css: './css'
};


gulp.task('browser-sync', () => BrowserSync.init({
    server: '.',
    logFileChanges: false,
    middleware: [historyApiFallback()],
    files: [
      'css/*.css',
      '*.html',
      'dist/*.js'
    ]
  })
);

gulp.task('clean-js', cb => rimraf(paths.dist, cb));
gulp.task('clean-css', cb => rimraf(paths.css, cb));

gulp.task('typescript', () => gulp.src(paths.entry)
  .pipe(
    plumber({
      errorHandler: err => console.log(err)
    })
  )
  .pipe(
    webpack(webpackConf).on('done', () => BrowserSync.reload())
  )
  .pipe(gulp.dest(paths.dist))
  .pipe(BrowserSync.reload({stream: true}))
);

gulp.task('watch', () => {
  gulp.watch(paths.stylWatch, gulp.parallel('stylusDev'));
});

gulp.task('stylusDev', () => gulp.src(paths.style)
  .pipe(sourcemaps.init())
  .pipe(stylus())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.css))
  .pipe(BrowserSync.reload({stream: true}))
);

gulp.task('stylusProd', () => gulp.src(paths.style)
  .pipe(stylus({
    compress: true
  }))
  .pipe(gulp.dest(paths.css))
);

gulp.task('build', gulp.series(
  'clean-js', 'clean-css', gulp.parallel('typescript', 'stylusProd'))
);

gulp.task('default',
  gulp.series('clean-css', 'clean-js',
    gulp.parallel('typescript', 'stylusDev', 'browser-sync', 'watch')
  )
);
