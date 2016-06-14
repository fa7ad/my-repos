const webpack = require('webpack');
module.exports = {
    entry: "./src/Index.tsx",
    output: {
        filename: "app.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: require.resolve("react"), loader: "expose?React" },
            { test: require.resolve("react-dom"), loader: "expose?ReactDOM" }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    watch: true,
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
