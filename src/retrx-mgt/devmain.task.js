/**
 * Created by root on 16-3-16.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var importcss = require('gulp-import-css');
var rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

function task(cb, params) {
    var appDir = params.app + '/';
    var notify = require('gulp-notify');
    var libraryPath = appDir + 'resources/bower/';
    gulp.src([
            libraryPath + 'jquery/jquery.min.js',
            appDir + 'resources/assets/src/common/common.js'
        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest(appDir + 'resources/assets/src'))
        .pipe(notify({message: 'Main Scripts (not IE) concat task complete'}));
    // IE
    gulp.src([
            libraryPath + 'html5shiv/html5shiv.min.js',
            libraryPath + 'respond/respond.min.js',
            libraryPath + 'jquery-legacy/jquery.min.js',
            appDir + 'resources/assets/src/common/common.js'
        ])
        .pipe(concat('main-ie.js'))
        .pipe(gulp.dest(appDir + 'resources/assets/src'))
        .pipe(notify({message: 'Main Scripts (IE) concat task complete'}));
    /* Main css file. */
    gulp.src([
            appDir + 'resources/assets/src/main.css'
        ])
        // .pipe(sass({ style: 'expanded' }))
        .pipe(concat('main.css'))
        .pipe(importcss())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(appDir + 'resources/assets/src'))
        .pipe(notify({message: 'Main Styles concat task complete'}));

    gulp.src([
            appDir + 'resources/assets/src/main-ie.css'
        ])
        .pipe(concat('main-ie.css'))
        .pipe(importcss())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(appDir+ 'resources/assets/src'))
        .pipe(notify({message: 'Main IIE Styles concat task complete'}));

    gulp.src([
            libraryPath + 'jquery/jquery.min.js',
            appDir + 'resources/assets/ui/common/common.js',
            appDir + 'resources/assets/src/common/base.js'
        ])
        .pipe(concat('base.js'))
        .pipe(gulp.dest(appDir + 'resources/assets/src'))
        .pipe(notify({message: 'Main Scripts (not IE) concat task complete'}));
    // IE
    gulp.src([
            libraryPath + 'html5shiv/html5shiv.min.js',
            libraryPath + 'respond/respond.min.js',
            libraryPath + 'jquery-legacy/jquery.min.js',
            appDir + 'resources/assets/ui/common/common.js',
            appDir + 'resources/assets/src/common/base.js'
        ])
        .pipe(concat('base-ie.js'))
        .pipe(gulp.dest(appDir + 'resources/assets/src'))
        .pipe(notify({message: 'Main Scripts (IE) concat task complete'}));
    /* Main css file. */
    gulp.src([
            appDir + 'resources/assets/ui/common/common.css',
            appDir + 'resources/assets/src/common/base.css'
        ])
        // .pipe(sass({ style: 'expanded' }))
        .pipe(concat('base.css'))
        .pipe(importcss())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(appDir + 'resources/assets/src'))
        .pipe(notify({message: 'Main Styles concat task complete'}));

    gulp.src([
            appDir + 'resources/assets/ui/common/common.css',
            appDir + 'resources/assets/src/common/base.css'
        ])
        .pipe(concat('base-ie.css'))
        .pipe(importcss())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(appDir + 'resources/assets/src'))
        .pipe(notify({message: 'Main IIE Styles concat task complete'}));

    gulp.src([
            appDir + 'resources/assets/src/main.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest(appDir + 'public/www'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(appDir + 'public/dist'));
    gulp.src([
            appDir + 'resources/assets/src/main-ie.js'
        ])
        .pipe(gulp.dest(appDir + 'public/www'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(appDir + 'public/dist'));
    gulp.src([
            appDir + 'resources/assets/src/main-ie.css'
        ])
        // .pipe(sass({ style: 'expanded' }))
        .pipe(importcss())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(appDir + 'public/www'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss(minifycssOptions))
        .pipe(gulp.dest(appDir + 'public/dist'));
    return gulp.src([
            appDir + 'resources/assets/src/main.css'
        ])
        // .pipe(sass({ style: 'expanded' }))
        .pipe(importcss())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(appDir + 'public/www'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss(minifycssOptions))
        .pipe(gulp.dest(appDir + 'public/dist'));
}

module.exports = task;