const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {

    return {
      plugins: [new webpack.HotModuleReplacementPlugin()],
      entry: "./src/index.js",
      output: {
        filename: "main.js",
        path: path.resolve(__dirname),
      },
      devServer: {
        hot: true,
        stats: "errors-only",
        port: 8000,
        host: "0.0.0.0",
        historyApiFallback: {
          rewrites: [
            {
              from: /.*/,
              to: "/",
            },
          ],
        },

        watchOptions: {
          poll: true,
        },
      },
      module: {
        rules: [
          {
            test: /\.elm$/,
            exclude: [/elm-stuff/, /node_modules/],
            use: [
              {
                loader: "elm-hot-webpack-loader",
              },
              {
                loader: "elm-webpack-loader",
                options: {
                  cwd: __dirname,
                  optimize: argv.mode == "production" ? true : false,
                  debug: argv.mode == "development" ? true : false,
                },
              },
            ],
          },
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.js$/,
            exclude: [/elm-stuff/, /node_modules/],
            loader: "babel-loader",
          },
        ],
      },
    };
};