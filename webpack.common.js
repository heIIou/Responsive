const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        './src/index.js',
    ],
    output: {
        publicPath: '/',
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
                'eslint-loader'
            ]
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'img/'
                }
            }]
        },
        {
            test: /\.(eot|eot|otf|ttf|woff|woff2)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'font/'
                }
            }]
        },
        {
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
            },{
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader'
            }, {
                loader: 'sass-loader'
            }]
        }
        ],
    },
    plugins: [
        // new BrowserSyncPlugin({
        //     host: 'localhost',
        //     port: 8000,
        //     proxy: 'http://localhost:8090/',
        //     open: false
        // }, {
        //     reload: true
        // }),
        new MiniCssExtractPlugin({
            filename: './[name].css'
        }),
        new WebpackBuildNotifierPlugin({
            title: 'Project_name',
            suppressSuccess: true,
            warningSound: true,
            messageFormatter: (error, filepath) => {
                return `${error}`;
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Главная',
            template: 'src/index.html',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true
    }
};