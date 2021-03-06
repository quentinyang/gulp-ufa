function task(cb, params) {
    if (params.context.env != 'dev') {
        return false;
    }

    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var importcss = require('gulp-import-css');
    var rename = require('gulp-rename');

    var appDir = './' + params.app + '/';

    return gulp.src(appDir + 'resources/assets/scss/**/*.scss')
        .pipe(sass({ style: 'expanded',
            errLogToConsole: true }).on('error', sass.logError))
        .pipe(importcss())
        .pipe(gulp.dest(appDir + 'resources/assets/src/common'))

        .pipe(rename({suffix: '-ie'}))
        .pipe(gulp.dest(appDir + 'resources/assets/src/common'));
}
module.exports = task;