// const gulp = require('gulp'),
//       sass = require('gulp-sass');
//
// gulp.task('sass', function() {
//   return gulp.src('./src/**/*.sass')
//       .pipe(sass())
//       .pipe(gulp.dest('./src'))
// })
//
// function watch() {
//   gulp.watch() {
//     gulp.watch('./src/**/*.sass', )
//   }
//
// }
// gulp.task('sass:watch', function() {
//   gulp.watch('./src/**/*.sass', 'sass');
// })

//подключение модулей gulp
const gulp = require('gulp'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    pug = require('gulp-pug')


//порядок подключения CSS файлов
const cssFiles = [
  '../../src/styles/**/*.sass',
  // '../materialize/css/materialize/css'
  // './src/sass/_media.sass'
]

//порядок подключения JS файлов
const jsFiles = [
  '../../src/js/**/*.js'
]
const pugPages = [
  '../../src/pug/index.pug',
  '../../src/pug/page/*.pug'
]

//таск на стили CSS
function styles() {
  //шаблоны для поиска файлов CSS
  //Все файлы по шаблону './src/sass/**/*.sass'
  return gulp.src(cssFiles)
  //объединение файлов в один
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('style.css'))
      // добовление префиксов
      .pipe(autoprefixer())
      //минификация sass
      // .pipe(cleanCSS({
      //   level: 2
      // }))
      //Выходная папка для стилей
      .pipe(gulp.dest('../../build/css'))
      .pipe(browserSync.stream());
}

//таск на скрипты JS
function scripts() {
  //шаблоны для поиска файлов JS
  //Все файлы по шаблону './src/js/**/*.js'
  return gulp.src(jsFiles)
  //объединение файлов в один
      .pipe(concat('main.js'))
      // минификация JS
      .pipe(uglify({
        toplevel: true
      }))
      //Выходная папка для скриптов
      .pipe(gulp.dest('../../build/js'))
      .pipe(browserSync.stream());
}

function clean() {
  return del(['build/*'])
}
//таск вызывающий функцию pug
gulp.task('pug', function() {
  return gulp.src('../../src/pug/**/*.pug')
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('../../build'));
});

function watch() {
  browserSync.init({
    server: {
      baseDir: "../../build"
    }
  });
  gulp.watch('../../src/pug/**/*.pug', function() {
    return gulp.src(pugPages)
        .pipe(pug({
          pretty: true
        }))
        .pipe(gulp.dest('../../build'));
  });
  // следит за CSS файлами
  gulp.watch('../../src/styles/**/*.sass', styles)
  // следит за JS файлами
  gulp.watch('../../src/js/**/*.js', scripts)
  // при изменении HTML запустить синхронизацию
  gulp.watch("../../build/**/*.html").on('change', browserSync.reload);
}


//таск вызывающий функцию styles
gulp.task('styles', styles);
//таск вызывающий функцию scripts
gulp.task('scripts', scripts);
//таск для очистки папки build
gulp.task('del', clean);
// таск для отслеживания изменений
gulp.task('watch', watch);
// таск для удаления файлов в папке build и паралельного запуска styles и scripts
// gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)));

// gulp.task('dev', gulp.series('build', 'watch'))