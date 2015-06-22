'use strict';

// ディレクトリ
var path = {
  'imgPath': 'img', // 例）'htdocs/images'
  'sassPath': 'sass', // 例）'htdocs/scss'
  'cssPath': 'css', // 例）'htdocs/stylesheets'
  'jsPath': 'js' // 例）'htdocs/javascripts'
}

// 使用パッケージ
var gulp = require('gulp');
var webserver = require('gulp-webserver'); // ローカルサーバ起動
var compass = require('gulp-compass'); // Sassコンパイル
var autoprefixer = require('gulp-autoprefixer'); // ベンダープリフィックス付与
var imagemin = require('gulp-imagemin'); // 画像圧縮
var pngquant = require('imagemin-pngquant'); // 画像圧縮
var plumber = require('gulp-plumber'); // コンパイルエラーが出てもwatchを止めない
var uglify = require('gulp-uglify');// js圧縮
var rename = require('gulp-rename');// リネーム
var gutil = require('gulp-util'); //ftp用
var ftp = require('gulp-ftp'); //ftp用

// js圧縮
gulp.task('compress', function() {
  gulp.src(path.jsPath + '/main.js')
    .pipe(plumber())
    .pipe(rename({extname: '.min.js'}))
    .pipe(uglify())
    .pipe(gulp.dest(path.jsPath + '/'))
});

//ローカルサーバー
gulp.task('webserver', function(){
  gulp.src('./') // ルート・ディレクトリ
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 8000
    }));
});

// Sassをコンパイルし、ベンダープレフィックスを付与
gulp.task('compass', function(){
  gulp.src(path.sassPath + '/*.scss')
    .pipe(plumber())
    .pipe(compass({
      config_file: 'config.rb',
      sass: path.sassPath,
      css: path.cssPath,
      image: path.imgPath
    }))
    .pipe(autoprefixer('last 2 version', 'ie 8', 'ie 7'))
    .pipe(gulp.dest(path.cssPath + '/'))
});

// 画像圧縮
gulp.task('imagemin', function(){
  gulp.src(path.imgPath + '/*')
    .pipe(plumber())
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest(path.imgPath + '/'));
});

// sassファイル変更監視
gulp.task('sassWatch', function() {
  gulp.watch(path.sassPath + '/*.scss', function(event){
    gulp.run('compass')
  });
});

// jsファイル変更監視
gulp.task('jsWatch', function() {
  gulp.watch(path.jsPath + '/main.js', function(event){
    gulp.run('compress')
  });
});

// ftp
gulp.task('ftpUp', function () {
    return gulp.src('src/*')
        .pipe(ftp({
            host: 'm9.coreserver.jp',
            user: 'bambam',
            pass: 'oqmCqXInd7S3',
            port: 22,
            remotePath: '/public_html/mage.bam-tone.com'
        }))
        .pipe(gutil.noop());
});

// タスク実行
gulp.task('default', ['webserver','compass','sassWatch','compress','jsWatch','imagemin','ftpUp']); // デフォルト実行
