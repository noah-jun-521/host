const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

const { NODE_ENV = "development" } = process.env;

let remote_react_todo, remote_cra, remote_vue3, remote_old_react;

if (NODE_ENV === "development") {
  remote_react_todo = "http://localhost:3001";
  remote_cra = "http://localhost:3002";
  remote_vue3 = "http://localhost:3003";
  remote_old_react = "http://localhost:3004";
} else {
  todoBase = "https://remote-react-todo.vercel.app/";
  remoteCRABase = "https://remote-cra.vercel.app/";
  remoteVue3Base = "https://remote-vue3.vercel.app/";
  remote_old_react = "http://localhost:3004";
}

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(process.cwd(), "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      remotes: {
        remote_react_todo: `remote_react_todo@${remote_react_todo}/remoteEntry.js`,
        remote_cra: `remote_cra@${remote_cra}/remoteEntry.js`,
        remote_vue3: `remote_vue3@${remote_vue3}/remoteEntry.js`,
        remote_old_react: `remote_old_react@${remote_old_react}/remoteEntry.js`,
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-typescript", "@babel/preset-react"],
            },
          },
        ],
        exclude: /[\\/]node_modules[\\/]/,
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
};
