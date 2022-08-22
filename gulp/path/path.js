
import * as nodePath from 'path';

const root = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

 export const path = {
    build: {
        css: `${buildFolder}/css`,
        scripts: `${buildFolder}/js`,
        assets: `${buildFolder}/assets`,
        less: `${buildFolder}/css`,
        html: `${buildFolder}/`,
        img: `${buildFolder}/img`
    },
    src: {
        css: `${srcFolder}/css/**/*.*`,
        scripts: `${srcFolder}/js/*.js`,
        assets: `${srcFolder}/assets/**/*.*`,
        less: `${srcFolder}/less/[a-z]*.less`,
        html: `${srcFolder}/*.pug`,
        img: `${srcFolder}/img/**/*.*`
    },
    watch: {   
        css: `${srcFolder}/css/**/*.*`,
        scripts: `${srcFolder}/js/**/*.*`,
        assets: `${srcFolder}/assets/**/*.*`,
        less: `${srcFolder}/less/**/*.less`,     
        html: `${srcFolder}/**/*.pug`,
        img: `${srcFolder}/img/**/*.*` 
    },
    clean: buildFolder,
    rootFolder: root,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
}