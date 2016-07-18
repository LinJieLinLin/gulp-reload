var fs = require('fs'),
    gulp = require("gulp"),
    path = require('path'),
    browserSync = require('browser-sync'),
    argv = require('minimist')(process.argv.slice(2)),
    floderList = {
        '1': 'react-0.14.7'
    },
    floder = '';

if (argv.f || argv.floder) {
    var temF = argv.f || argv.floder;
    floder = floderList[temF] || temF;
    console.log(floder);
}
// gulp.task('check', G.shell.task(['es-checker']));

gulp.task('reload', function() {
    console.log('-----------------reload:' + floder);
    browserSync.reload();
});

gulp.task('default', [], function() {
    console.log('start serve');
    browserSync.init({
        server: {
            // routes: {
            //     '/bower_components': 'bower_components'
            // },
            baseDir: '../' + floder
        },
        ui: {
            port: 4401
        },
        open: false
    });
});

gulp.task('watch', ['default'], function() {
    gulp.watch('../' + floder + '/*', ['reload']);
});
