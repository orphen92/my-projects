const path = require('path');
const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: "[name].bundle.js",
    },
    devServer: {
        static: path.join(__dirname, "src/app"),
        port: 9000,
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/app/template/template.html'),
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    }
})