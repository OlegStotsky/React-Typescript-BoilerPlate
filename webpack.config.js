const path = require("path");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");

module.exports = env => {
  const isProduction = env === "production";
  return {
    mode: isProduction ? "production" : "development",
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
      publicPath: "/"
    },
    resolve: {
      plugins: [new TsConfigPathsPlugin()],
      extensions: [".js", ".json", ".ts", ".tsx"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      proxy: {
        "/api/*": {
          target: "http://localhost:3000"
        }
      }
    },
    devtool: isProduction ? "source-map" : "cheap-module-eval-source-map"
  };
};
