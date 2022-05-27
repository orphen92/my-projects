const path = require('path');
module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
        vendor: path.resolve(__dirname, 'src/vendor.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name].[hash][ext]'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            }
        ]
    }
}