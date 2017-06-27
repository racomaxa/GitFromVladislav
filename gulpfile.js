/**
 * Created by student01 on 27.06.2017.
 */
const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');


gulp.task('es6', () => {
    return gulp.src('./src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(browserify({
            insertGlobals : true,
            presets: ['es2015']
        }))
        .pipe(gulp.dest(''));
});

gulp.task('default',['es6'],() =>{
    gulp.watch('src/main.js',['es6'])
});

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
});
