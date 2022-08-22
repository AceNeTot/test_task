import gulp from 'gulp';
import { path } from './gulp/path/path.js'
import { plugins } from './gulp/config/plugins.js';


global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}


import { img, assets, scripts } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { less } from './gulp/tasks/less.js';

async function watcher() {
    gulp.watch(path.watch.img, img);
    gulp.watch(path.watch.assets, assets);
    gulp.watch(path.watch.scripts, scripts);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.less, less);
}

const mainTasks = gulp.series([img, assets, scripts, html, less]);

const dev = gulp.series(reset, mainTasks, watcher);


gulp.task('default', await dev);