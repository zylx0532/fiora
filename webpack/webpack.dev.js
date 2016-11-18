const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const progressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    output: { path: './public' },
    module: {
        loaders: [
            {
                test: /\.js|\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                },
            },
            {
                test: /\.(css)$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader', 'resolve-url', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader',
            },
        ],
    },
    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] }),
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"${process.env.NODE_ENV}"`,
            },
        }),
        new progressBarPlugin(),
    ],
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        displayErrorDetails: true,
        historyApiFallback: true,
        contentBase: 'public/',
    },
};
