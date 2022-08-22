
export const img = async () => {
    app.gulp.src(app.path.src.img)
    .pipe(app.gulp.dest(app.path.build.img));
}

export const assets = async () => {
    app.gulp.src(app.path.src.assets)
    .pipe(app.gulp.dest(app.path.build.assets));
}

export const scripts = async () => {
    app.gulp.src(app.path.src.scripts)
    .pipe(app.gulp.dest(app.path.build.scripts));
}
/*
export const css = async () => {
    app.gulp.src(app.path.src.css)
    .pipe(app.gulp.dest(app.path.build.css));
}
*/