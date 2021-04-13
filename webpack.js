const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildDir = path.resolve(__dirname, "build");
const production = process.env.NODE_ENV === "production";

const opts = {
  mode: "production",
  entry: ["./index.js"],
  output: { path: buildDir, filename: "[name].[hash].js" },
  plugins: [new HtmlWebpackPlugin({ title: "Netlify CMS for Eva Volfová" })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

if (!production) {
  opts.devtool = "inline-source-map";
  opts.mode = "development";
}

module.exports = opts;
