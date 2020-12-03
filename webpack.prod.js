const path = require('path')
const webpack = require('webpack')
const HTMLWebPkPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HTMLWebPkPlugin({
            template: ".src/client/view/index.html",
            filename: "./index.html"
        })
    ]
}
