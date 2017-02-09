const path = require('path');
const config = require('../config');
const utils = require('./utils');
const projectRoot = path.resolve(__dirname, '../');

const env = process.env.NODE_ENV;
// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file
const cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap);
const cssSourceMapProd = (env === 'production' && config.build.productionSourceMap);
const useCssSourceMap = cssSourceMapDev || cssSourceMapProd;

module.exports = {
    entry: {
        app: './src/client/webPc/index.js',
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            src: path.resolve(__dirname, '../src'),
            assets: path.resolve(__dirname, '../src/assets'),
            components: path.resolve(__dirname, '../src/components'),
        },
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')],
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint',
                include: [
                    path.join(projectRoot, 'src'),
                ],
                exclude: /node_modules/,
            },
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [
                    path.join(projectRoot, 'src'),
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
                },
            },
        ],
    },
    eslint: {
        formatter: require('eslint-friendly-formatter'),
    },
};
