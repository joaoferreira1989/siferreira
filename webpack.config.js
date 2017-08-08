const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './client/app.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client/dist')
    },
    resolve: {
        alias: {
            angular: require.resolve('angular')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: path.resolve(__dirname, './client') + '/index.html',
            favicon: 'client/favicon.ico',
            minify: {
                collapseWhitespace: false
            }
        })
    ]
};