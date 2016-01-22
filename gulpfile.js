// # Gulp - build automation in JavaScript

// ## Imports
// Here all module we need are imported.
// If this
const gulp = require('gulp');

const sourcemaps = require('gulp-sourcemaps');

const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');

const watch = require('gulp-watch');

const gulpCopy = require('gulp-copy');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const gulpif = require('gulp-if');

// ##Tasks

// ### Foundation
// To convert all foundation SCSS to SASS use
// `sass-convert -R -F scss -T sass ./node_modules/foundation-sites/scss ./src/sass`

// ### Convert SASS to CSS
// not easy to make SASS and autoprefixer play nice together
// while still gnerating source maps
// https://github.com/sindresorhus/gulp-autoprefixer/issues/8
// read the different solutions in the linked source if this does not work
gulp.task('sass', function() {
  gulp.src('./src/sass/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
      precision: 10,
      errLogToConsole: true,
      // indentedSyntax: true, → Sass Syntax
      outputStyle: 'nested'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulpif(['*.css', '!*.map'], autoprefixer()))
    .pipe(gulp.dest('dist/css'));
});

// ### Convert and bundle JS files
// Watch JS files, on change convert (ES6 to ES5) and bundle them
function compileJs(watch) {
  let bundler = watchify(browserify('./src/boot.js')
    .transform(babelify.configure({
      presets: ['es2015'], // Use all of the ES2015 spec
      plugins: ['transform-decorators-legacy']
    })));

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) {
        console.error(err);
        this.emit('end');
      })
      .pipe(source('frontend.js')) //Pass desired output filename to vinyl-source-stream
      .pipe(buffer())
      .pipe(sourcemaps.init({
        loadMaps: true
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('dist/js'));
  }

  if (watch) { // If the watch option was specified, restart the budeling process on file changes
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }
  rebundle();
}

// ### Sync HTML files
// http://blog.andrewray.me/how-to-copy-only-changed-files-with-gulp/
function sync(base, src, trgt) {
  gulp.src(base + src, {
    base: base
  })
  .pipe(watch(base + src, {
    base: base,
    verbose: true
  }))
  .pipe(gulp.dest(trgt));
}

// ### Watch file changes, do things
// This is the watch task that watches all file changes and
// runs task so we immediately have them on the server.
gulp.task('watch', function() {
  // Watch SASS files changes and create CSS.
  gulp.watch('./src/sass/*.sass', ['sass']);
  // Watch changes in HTML template file and sync them to the server.
  sync('./src', '/**/*.html', 'dist');
  // Watch and package JS files.
  return compileJs(true);
});

gulp.task('dist', function() {
  compileJs();
  gulp.start('sass');
  gulp.src('./src/**/*.html').pipe(gulpCopy('../cms/public/app', {}));
  gulp.src('./src/index.ejs').pipe(gulpCopy('../cms/views/angular', {}));
});
