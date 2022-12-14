import webpHtmlNosvg from "gulp-webp-html-nosvg";
import pug from "gulp-pug";

export const html = async () => {
    app.gulp.src(app.path.src.html)
        .pipe(app.plugins.plumber(app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>",
        })))
        .pipe(pug({ pretty: true, verbose: true, }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.gulp.dest(app.path.build.html));
}