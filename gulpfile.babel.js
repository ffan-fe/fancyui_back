import gulp from 'gulp';
import less from 'gulp-less';
import rename from 'gulp-rename';
import ts from "gulp-typescript";

import webpack from 'webpack';
import webpackDevMiddelware from 'webpack-dev-middleware';
import webpachHotMiddelware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';

import browserSync from 'browser-sync';
import yargs from 'yargs';
import colorsSupported from 'supports-color';

import path from 'path';

'use strict';

const resourcePath = './src/';

gulp.task('default', callback => {
  const bs = browserSync.create();
  const reload = browserSync.reload;
  const compiler = webpack(webpackConfig);
  const pageName = yargs.argv.pageName || 'index';

  bs.init({
    server: {
      baseDir: `./src/`,
      index: `index.html`
    },
    // files: [
    //   `./src/${pageName}/*.html`,
    //   `./src/${pageName}/*.less`,
    //   `./src/${pageName}/*.ts`
    // ],
    middleware: [
      webpackDevMiddelware(compiler, {
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false
        }
      })
    ]
  });
});

gulp.task('build', () => {
  webpack(webpackConfig, (err, stats) => {});
});