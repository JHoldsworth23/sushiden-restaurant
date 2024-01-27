const path = require('path');
// HTML Webpack Plugin and template

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/script/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)/i,
                type: 'asset/resource',
            },
        ],
    },
};