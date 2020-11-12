const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
    entry: {
        entry: "./src/index.jsx",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        sourceMapFilename: "main.css.map",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js||jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            "@babel/plugin-syntax-dynamic-import",
                            "@babel/plugin-transform-runtime",
                        ],
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.(css|s[ac]ss)$/,
                use: [
                    process.env.NODE_ENV !== "production"
                        ? "style-loader"
                        : {
                              loader: MiniCssExtractPlugin.loader,
                              options: {
                                  publicPath: "/dist/main.css",
                              },
                          },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png||jpeg||jpg||gif||svg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 900000,
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin()],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            template: "public/index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "./dist/main.css",
            chunkFilename: "chunk-main.css",
        }),
    ],
}
