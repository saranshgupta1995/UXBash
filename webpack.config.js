const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const copyWebpackPlugin = new CopyWebpackPlugin([
    {
        from: "./manifest.json"
    }
])

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        sourceMap: true,
        localIdentName: '[local]-[path]-[hash:base64:5]'
    }
}

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.json?$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    CSSModuleLoader,
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [htmlPlugin, copyWebpackPlugin]
};