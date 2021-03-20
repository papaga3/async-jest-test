// Configuration file for webpack
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: ["react-hot-loader/patch", "./src/index.js"], // Entry point of the application
    mode: "development",
    module: {
        rules: [
            {
                // Loader for js and jsx files
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {presets: ["@babel/env"]}
            },
            {
                // Loader for css files
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                // Loader for ts and tsx files
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    resolve: { 
        extensions: ["*", ".js", ".jsx", "ts", "tsx"],
        // Set alias for hot reloading react-dom (can hot reload react hooks)
        alias: {"react-dom" : "@hot-loader/react-dom"}
    },
    output: {
        // Output bundle file
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        // Dev server configuration
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};