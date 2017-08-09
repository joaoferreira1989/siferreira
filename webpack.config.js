const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './client/app.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client/dist')
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: path.resolve(__dirname, './client') + '/index.html',
            favicon: 'public/favicon.ico',
            minify: {
                collapseWhitespace: false
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: [
                    path.resolve(__dirname, './client') + '/index.html',
                    path.resolve(__dirname, './client') + '/dist/index.html'
                ],
                loader: [
                    'ngtemplate-loader',
                    'html-loader?attrs=use:xlink:href'
                ]
            },
            {
                test: /\.(jpg|png)$/i,
                loader: 'file-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    }
};