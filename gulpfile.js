"use strict";

let gulp = require("gulp");
let plumber = require("gulp-plumber");
let postcss = require("gulp-postcss");
let autoprefixer = require("autoprefixer");
let sourcemaps = require("gulp-sourcemaps");
let server = require("browser-sync");


gulp.task("serve", function(){
    server.init({
        server: ".",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });
    gulp.watch(["*.html", "*/*.css", "*.js"], server.reload);
});
