// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()

//@@STEP--00 : import/declare dependance in const
const { src, dest, watch, series, parallel } = require("gulp");
// Importing all the Gulp-related packages we want to
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const imagemin = require("gulp-imagemin");
const twig = require("gulp-twig");
const tsProject = require("gulp-typescript"); //@ ts 
// const tsProject = ts.createProject('tsconfig.json');
const server = require("browser-sync").create();

var replace = require("gulp-replace");

//@@STEP--01 : source/dist const path define
// source File paths
const source = {
    scssPath: "app/scss/**/*.scss",
    jsPath: "app/js/**/*.js", // "app/js/**/*.js" |  "app/js/script.js"
    tsPath: "app/ts/**/*.ts",
    imgPath: "app/img/**/*.*",
    fontPath: "app/fonts/**/*.*",
    tplPath: "app/twig/**/*.*",
    dataPath: "app/data/**/*.*"
};

// distination File paths
const dist = {
    scssPath: "dist",
    jsPath: "dist",
    tsPath: "dist",
    imgPath: "dist/img",
    fontPath: "dist/fonts",
    tplPath: "dist",
    dataPath: "dist/data",
    ServerEnterLoad: "dist" // entry point for loading/reloading browser
};

// local Server and reload after updating
function reload(done) {
    server.reload();
    done();
}

function serve(done) {
    server.init({
        server: {
            baseDir: dist.ServerEnterLoad
        }
    });
    done();
}

//@@STEP--02 : function task define

// Sass task: compiles the style.scss file into style.css
function scssTask() {
    return src(source.scssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
        .pipe(sourcemaps.write(".")) // write sourcemaps file in current directory
        .pipe(dest(dist.scssPath)); // put final CSS in dist folder
}

// images task : compile img task
function imgTask() {
    return src(source.imgPath)
        .pipe(imagemin({ verbose: true })) // verbose: true > display in console image mimification journal
        .pipe(dest(dist.imgPath));
}

// fonts task : compile fonts task
function fontTask() {
    return src(source.fontPath).pipe(dest(dist.fontPath));
}

// fonts task : compile fonts task
function dataTask() {
    return src(source.dataPath).pipe(dest(dist.dataPath));
}


// JS task: concatenates and uglifies JS files to script.js
function jsTask() {
    return src([
            "node_modules/jquery/dist/jquery.js",
            "node_modules/flatpickr/dist/flatpickr.js", // lib pour les calendrier
            source.jsPath
        ])
        .pipe(concat("all.js"))
        .pipe(uglify())
        .pipe(dest(dist.jsPath));
}

// TS task: typescript ...
function tsTask() {
    return src(source.tsPath)
        .pipe(tsProject({
            "files": [
                "app/ts/tsScript.ts"
            ],
            "compilerOptions": {
                "noImplicitAny": true,
                "target": "es5"
            }
        }))
        .js.pipe(dest(dist.tsPath));
}


// Templating task: TWIG
function tplTask() {
    console.log("tplTask : OK !!");
    return src([source.tplPath]) // ["app/twig/5-page/*.*", "app/twig/**/*.*"]  ||  source.tplPath
        .pipe(
            twig({
                data: {
                    // here define a global variable for all site
                    siteName: "Kit-starter for web template 201910 v 1.0",
                    // config specifique au projet: c'est des variable global dans le twig
                    TplInputCheckbox: "includes/forms/input-checkbox.twig",
                    TplInputRadio: "includes/forms/input-radio.twig",
                    TplEventLineStay: "includes/event-line-stay.twig",
                    TplEventLineDays: "includes/event-line-days.twig",
                    TplMainTopBtns: "includes/main-top-btns.twig",
                    TplCptJauge: "includes/components/jauge/jauge.twig",
                    TplCptSteps: "includes/components/validSteps.twig"
                },
                errorLogToConsole: true,
                cache: false
                    // cacheBustTask: false
            })
        )
        .pipe(dest(dist.tplPath));
}

// Cachebust : add param version to called files ( js ,css ..) in html page, to remove persistance browser cache
var cbString = new Date().getTime();

function cacheBustTask() {
    return src([dist.ServerEnterLoad + "/*.html"])
        .pipe(replace(/cb=\d+/g, "cb=" + cbString))
        .pipe(dest(dist.ServerEnterLoad));
}

//@@STEP--03 : watch path/task implement > watch([PATH1, PAHT2,...], parallel(TASK1,TASK2,...));

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask() {
    // livereload.listen();
    watch(
        [
            source.scssPath,
            source.jsPath,
            source.imgPath,
            source.fontPath,
            source.dataPath,
            source.tplPath
        ],
        parallel(
            scssTask,
            jsTask,
            tsTask,
            imgTask,
            fontTask,
            dataTask,
            tplTask,
            reload
        )
    );
}

//@@STEP--04 : default gulb launch serices (cmd: gulp) > implementing tasks
// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(
        serve,
        jsTask,
        tsTask,
        imgTask,
        fontTask,
        dataTask,
        tplTask,
        scssTask
    ),
    cacheBustTask,
    watchTask
);