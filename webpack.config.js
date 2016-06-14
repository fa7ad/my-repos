const webpack = require('webpack');
let config = {
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
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  watch: true
};

if (process.env.NODE_ENV === 'production'){
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin()
  ];
  config.watch = false;
}
module.exports = config;