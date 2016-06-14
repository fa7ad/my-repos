// node@6.x
const gulp = require('gulp');
const del = require('del');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const BrowserSync = require('browser-sync').create();
const webpack = require('webpack-stream');
const webpackConf = require('./webpack.config.js');
const historyApiFallback = require('connect-history-api-fallback');
const isProduction = (process.env.NODE_ENV === 'production');

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

gulp.task('clean', () => del([paths.dist, paths.css]));

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

gulp.task('stylus', () => {
  let task = gulp.src(paths.style);
  if(isProduction){
    task.pipe(stylus({compress: true}));
  }else{
    task.pipe(sourcemaps.init())
      .pipe(stylus())
      .pipe(sourcemaps.write('.'));
  }
  return task.pipe(gulp.dest(paths.css))
    .pipe(BrowserSync.reload({stream: true}));
  }
);

gulp.task('build', gulp.series(
  'clean', gulp.parallel('typescript', 'stylus'))
);

gulp.task('watch', () => gulp.watch(paths.stylWatch, gulp.parallel('stylus')));

if(isProduction){
  gulp.task('default', gulp.series('build'));
}else{
  gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'build'), 'watch'));
}
