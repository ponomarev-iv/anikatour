'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    wiredep = require('wiredep').stream,
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    spritesmith  = require('gulp.spritesmith'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('gulp-rimraf'),
    browserSync = require("browser-sync"),
    $ = {
        gutil: require('gulp-util'),
        svgSprite: require('gulp-svg-sprite'),
        size: require('gulp-size'),
    },
    reload = browserSync.reload;

var path = {
    build: {
        css: 'public/css/',
        img: 'public/img/',
        js: 'public/js/',
        base: '',
        html: 'public/'
    },
    src: {
        style: '_dev/scss/all.scss',
        scss: '_dev/scss/',
        img: '_dev/img/*.*',
        sprite: '_dev/img/sprite/*.png',
        spriteRetina: '_dev/img/sprite@2x/*.png',
        js: '_dev/js/*',
        html: '_dev/tmpl/*.html'
    },
    watch: {
        style: '_dev/scss/**/*.scss',
        img: '_dev/img/*.*',
        sprite: '_dev/img/sprite/*.*',
        js: '_dev/js/*',
        html: '_dev/tmpl/*.html'
    },
    clean: 'public/'
};

var config = {
    server: {
        baseDir: "public/"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend"
};

gulp.task('webserver', function () {
    browserSync(config);
});


gulp.task('svgSprite', function () {
    return gulp.src('_dev/img/icons/*')
        .pipe($.svgSprite({
            shape: {
                spacing: {
                    padding: 5
                }
            },
            mode: {
                css: {
                    dest: "./",
                    layout: "diagonal",
                    sprite: "public/img/sprite",
                    bust: false,
                    render: {
                        scss: {
                            dest: "_dev/scss/inc/_sprite.scss",
                            template: "_dev/scss/tmpl/sprite-template.scss"
                        }
                    }
                }
            },
            variables: {
                mapname: "icons"
            }
        }))
        .pipe(gulp.dest("./"));
});


gulp.task('sprite:build', function () {
    var spriteData =
        gulp.src(path.src.sprite)
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss',
                cssFormat: 'scss',
                imgPath: '../img/sprite.png',
                padding: 3,
                algorithm: 'binary-tree',
                cssVarMap: function(sprite) {
                    sprite.name = 'i-' + sprite.name
                }
            }));

    spriteData.img.pipe(gulp.dest(path.build.img));
    spriteData.css.pipe(gulp.dest(path.src.scss));

});

gulp.task('sprite-retina', function () {
    var spriteRetinaData =
        gulp.src(path.src.spriteRetina)
            .pipe(spritesmith({
                imgName: 'sprite@2x.png',
                retinaSrcFilter: '_dev/img/sprite@2x/*@2x.png',
                retinaImgName: 'sprite@2x.png',
                cssName: 'sprite.scss',
                cssFormat: 'scss',
                imgPath: '/public/img/sprite.png',
                retinaImgPath: '/public/img/sprite@2x.png',
                cssVarMap: function(sprite) {
                    sprite.name = 'i-' + sprite.name
                }
            }));

    spriteRetinaData.img.pipe(gulp.dest(path.build.img));
    spriteRetinaData.css.pipe(gulp.dest(path.src.scss));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sass({
            errLogToConsole: true
        }))
        .on('error', console.log)
        .pipe(prefixer('last 4 versions'))
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin())
        .on('error', console.log)
        .pipe(gulp.dest(path.build.img));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});

gulp.task('build', [
    'html:build',
    'style:build',
    'image:build',
    'js:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.sprite], function(event, cb) {
        gulp.start('sprite:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);