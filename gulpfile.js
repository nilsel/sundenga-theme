var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');

var paths = {
  // scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
  // images: 'client/img/**/*',
  less: 'less/style.less'
};

// Compiles LESS > CSS
gulp.task('build-less', function(){
    return gulp.src('./less/style.less')
        .pipe(less())
        .pipe(gulp.dest('./css/style.css'));
});

// gulp.src('./client/templates/*.jade')
//     .pipe(jade())
//     .pipe(minify())
//     .pipe(gulp.dest('./build/minified_templates'));

// gulp.task('scripts', function() {
//   // Minify and copy all JavaScript (except vendor scripts)
//   return gulp.src(paths.scripts)
//     .pipe(coffee())
//     .pipe(uglify())
//     .pipe(concat('all.min.js'))
//     .pipe(gulp.dest('build/js'));
// });


// Rerun the task when a file changes
gulp.task('watch', function() {
  // gulp.watch(paths.less, ['less']);
  gulp.watch(paths.less, ['build-less']);
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['build-less']);