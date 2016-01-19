var gulp = require("gulp"),
    ejs = require("gulp-ejs"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    uglify = require("gulp-uglify"),
    frontnote = require("gulp-frontnote"),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    spritesmith = require('gulp.spritesmith'),
    browser = require("browser-sync"),
    plumber = require("gulp-plumber");

var SRC = "src",
    DIST = "dist";

//ejs
gulp.task("ejs", function() {
    gulp.src(
        ["src/ejs/**/*.ejs",'!' + "src/ejs/**/_*.ejs"]
    )
        .pipe(ejs())
        .pipe(gulp.dest("dist/"));
});

//style
gulp.task("sass", function() {
    gulp.src(SRC + "/sass/**/*.scss")
        .pipe(frontnote({
            css: 'config/css/common.css'
        }))
        .pipe(sass())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest("guide/config/css"))
        .pipe(gulp.dest(DIST + "/config/css"))
        .pipe(browser.reload({stream:true}));
});

//browser sync
gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./dist",
            index  : "flame_template.html"
        }
    });
});

//CSSmin
gulp.task('cssmin', function () {
  gulp.src(DIST + "/assets/css/*css")
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest("guide/config/css/min"))
  .pipe(gulp.dest(DIST + "/assets/css/min"));
});

//JSmin
gulp.task("js", function() {
    gulp.src([DIST + "/assets/js/*js"])
        .pipe(uglify())
        .pipe(gulp.dest("./guide/config/js/min"))
        .pipe(gulp.dest(DIST + "/assets/js/min"));
});

// img_min
gulp.task("imagemin", function() {
    gulp.src(DIST + "/assets/templates/v1/**/*.+(jpg|jpeg|png|gif|svg)")
    .pipe(imagemin({
        progressive: true,
        use: [pngquant({quality: '65-80', speed: 1})]
    }))
    .pipe(gulp.dest("guide/assets/templates/v1/"))
    .pipe(gulp.dest(DIST + "/assets/templates/v1/"));
});

// spritesmith
gulp.task("sprite", function () {
  var spriteData = gulp.src("src/sprite/**/*.png").pipe(spritesmith({
    imgName: "sprite.png",
    cssName: "_sprite.scss",
    imgPath: "/assets/templates/v1/",
    cssFormat: "scss",
    cssVarMap: function (sprite) {
      sprite.name = "sprite-" + sprite.name;
    }
  }));

  spriteData.img
    .pipe(gulp.dest(DIST + "/assets/templates/v1/"));

  spriteData.css
    .pipe(gulp.dest(SRC + "/sass/"));
});


//watch
gulp.task("default",['server'], function() {
    gulp.watch(SRC + "/sass/**/*.scss",["sass"]);
    gulp.watch(SRC + "/ejs/**/*.ejs",["ejs"]);
});
