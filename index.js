var gulp = require('gulp');
var notify = require('gulp-notify');
var stylus = require('gulp-durandal');
var gulpif = require('gulp-if');
var elixir = require('laravel-elixir');

elixir.extend('durandal', function(src, output) {

    var config = this;

    var baseDir = config.preprocessors.baseDir + 'durandal';

    src = this.buildGulpSrc(src, baseDir, '**/*.js');

    gulp.task('durandal', function() {
    });

    this.registerWatcher('durandal', baseDir + '/**/*.js');

    return this.queueTask('durandal');

});