// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV == 'production';
const watch = process.env.NODE_ENV == 'development';
const outDir = path.resolve(__dirname, 'app', 'dist');

const stylesHandler = mode ? MiniCssExtractPlugin.loader : 'style-loader';

const base = {
    mode,
    watch,
    devtool: false,
    plugins: [new webpack.SourceMapDevToolPlugin({})],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};

const main = Object.assign(base, {
    target: 'electron-main',
    entry: './src/main.ts',
    output: {
        path: outDir,
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/']
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ]
    }
});

const render = {
    ...base,
    target: 'electron-renderer',
    entry: {
        react: './src/components/root.tsx'
    },
    output: {
        path: outDir,
        filename: 'components/root.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/']
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset'
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ]
    }
};

module.exports = [main, render];
