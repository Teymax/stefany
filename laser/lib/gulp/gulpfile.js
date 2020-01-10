//подключение модулей gulp
const gulp         = require( 'gulp' ),
      concat       = require( 'gulp-concat' ),
      autoprefixer = require( 'gulp-autoprefixer' ),
      cleanCSS     = require( 'gulp-clean-css' ),
      uglify       = require( 'gulp-uglify' ),
      del          = require( 'del' ),
      browserSync  = require( 'browser-sync' ).create(),
      sass         = require( 'gulp-sass' ),
      pug          = require( 'gulp-pug' ),
      beautifySass = require( 'gulp-sassbeautify' ),
      beautifyPug  = require( 'gulp-pug-beautify' ),
      // cssmin       = require( 'gulp-cssmin' ),
      htmlmin      = require( 'gulp-htmlmin' ),
      zip          = require( 'gulp-zip' ),
      babel        = require( 'gulp-babel')

function moveImages () {
  return gulp.src( '../../src/assets/img/**/*.*' )
             .pipe( gulp.dest( '../../build/assets/img' ) )
}

function moveIcons () {
  return gulp.src( '../../src/assets/icon/**/*.*' )
             .pipe( gulp.dest( '../../build/assets/icon' ) )
}

function moveFonts () {
  return gulp.src( '../../src/assets/fonts/**/*.*' )
             .pipe( gulp.dest( '../../build/assets/fonts' ) )
}

//порядок подключения CSS файлов
const cssFiles = [
  '../../src/styles/**/*.sass'
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
function styles () {
  //шаблоны для поиска файлов CSS
  //Все файлы по шаблону './src/sass/**/*.sass'
  return gulp.src( cssFiles )
             //объединение файлов в один
             .pipe( sass().on( '_error.sass', sass.logError ) )
             .pipe( concat( 'style.css' ) )
             // добовление префиксов
             .pipe( autoprefixer() )
             // Beautify
             .pipe( beautifySass( {
               indent: 2
             } ) )
             //минификация sass
             // .pipe( cleanCSS( {
             //   level: 2
             // } ) )
             // Минификация css
             // .pipe( cssmin() ) ////////////////////
             //Выходная папка для стилей
             .pipe( gulp.dest( '../../build/css' ) )
             .pipe( browserSync.stream() )
}

//таск на скрипты JS
function scripts () {
  //шаблоны для поиска файлов JS
  //Все файлы по шаблону './src/js/**/*.js'
  return gulp.src( jsFiles )
              .pipe(babel({
                presets: ['@babel/env']
              }))
             //объединение файлов в один
             .pipe( concat( 'main.js' ) )
             // минификация JS
             .pipe( uglify( {
               toplevel: true
             } ) )
             //Выходная папка для скриптов
             .pipe( gulp.dest( '../../build/js' ) )
             .pipe( browserSync.stream() )
}

function clean () {
  return del( ['../../build/*', '../../build/**'], { force: true } )
}

function movePug () {
  return gulp.src( pugPages )
             .pipe( pug( {
               pretty: true
             } ) )
             .pipe( beautifyPug( { tab_size: 1 } ) )
             .pipe( htmlmin( { collapseWhitespace: true } ) )
             .pipe( gulp.dest( '../../build' ) )
}

const compress = () => gulp.src( '../../build/**' ).pipe( zip( 'build.zip' ) )
                           .pipe( gulp.dest( '../../' ) )

function watch () {
  browserSync.init( {
    server: {
      baseDir: '../../build'
    }
  } )
  gulp.watch( '../../src/pug/**/*.pug', function () {
    return gulp.src( pugPages )
               .pipe( pug( {
                 pretty: true
               } ) )
               .pipe( gulp.dest( '../../build' ) )
  } )

  // следит за CSS файлами
  gulp.watch( '../../src/styles/**/*.sass', styles )
  // следит за Fonts файлами
  gulp.watch( '../../src/assets/fonts/**/*.*', moveFonts )
  // следит за Images файлами
  gulp.watch( '../../src/assets/img/**/*.*', moveImages )
  // следит за Icon файлами
  gulp.watch( '../../src/assets/icon/**/*.*', moveIcons )
  // следит за JS файлами
  gulp.watch( '../../src/js/**/*.js', scripts )
  // при изменении HTML запустить синхронизацию
  gulp.watch( '../../build/**/*.html' ).on( 'change', browserSync.reload )
}

//таск вызывающий функцию styles
gulp.task( 'styles', styles )
//таск вызывающий функцию scripts
gulp.task( 'scripts', scripts )
//таск для очистки папки build
gulp.task( 'del', clean )
// таск для отслеживания изменений
gulp.task( 'watch', watch )
// билд в архив
gulp.task( 'comp', compress )

gulp.task( 'prod', gulp.series( clean, styles, scripts, moveImages, moveIcons, moveFonts, movePug, compress ) )
// таск для удаления файлов в папке build и паралельного запуска styles и
// scripts
gulp.task( 'build', gulp.series( clean, gulp.parallel( styles, scripts, moveImages, moveIcons, moveFonts, movePug ) ) )

gulp.task( 'dev', gulp.series( 'build', 'watch' ) )
