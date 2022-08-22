import gulpLess from "gulp-less";

export const less = () => app.gulp.src(app.path.src.less)
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: "LESS",
        message: "Error: <%= error.message %>",
    })))
    .pipe(gulpLess())
    .pipe(app.gulp.dest(app.path.build.less));