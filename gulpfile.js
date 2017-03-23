process.env.BABEL_ENV = 'production';

const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const babelrc = require('./config/babel.js');

gulp.task('js', function () {
  return gulp.src([
    './components/**/*.js',
    '!./components/**/__test__/*.js',
    '!./components/__mocks__/**/*.js'
  ])
    .pipe(babel(babelrc.production))
    .pipe(gulp.dest('./lib'));
});

gulp.task('css', function () {
  const plugins = [
    require('postcss-smart-import')({
      root: __dirname,
      path: [path.join(__dirname, './components')],
    }),
    require('postcss-url')(),
    require('postcss-mixins')(),
    require('postcss-cssnext')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9',
      ]
    }),
    require('postcss-nested')(),
  ];

  return gulp.src([
      './components/*.css',
      './components/**/*.css'
    ])
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./lib'));
});

gulp.task('fonts', function () {
    return gulp.src([
      './components/**/*.eot',
      './components/**/*.svg',
      './components/**/*.ttf',
      './components/**/*.woff',
    ])
    .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['js', 'css', 'fonts']);
