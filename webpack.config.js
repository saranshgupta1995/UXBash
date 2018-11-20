const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const copyWebpackPlugin = new CopyWebpackPlugin([
    {
        from: "./manifest.json"
    },
    {
        from: "./manifest-icons",
        to: "./manifest-icons"
    }
]);

const cleanWebpackPlugin = new CleanWebpackPlugin(['dist'], {
    verbose: true,
    dry: false,
    exclude: []
});


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
            },
            {
                test: /\.(svg|gif|png)$/,
                loader: 'file-loader',
                options: {
                    name: "[path][name].[ext]?[hash]"
                }
            }
        ]
    },
    plugins: [cleanWebpackPlugin, htmlPlugin, copyWebpackPlugin]
};