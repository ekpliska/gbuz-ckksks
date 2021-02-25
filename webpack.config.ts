import * as path from "path";
import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
  mode: "development",
  target: "web",
  entry: {
    index: [
      "./src/index.tsx"
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [
      ".json", 
      ".ts", 
      ".tsx", 
      ".js",
      ".jsx",
    ],
    modules: [
      path.resolve(__dirname, "./src"),
      "node_modules",
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    compress: true,
    inline: true,
    hot: true,
    open: true,
    watchContentBase: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              esModule: false,
            }
          },
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            }
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: ["./src/styles/base/mixins.scss", "./src/styles/base/colors.scss"]
            }
          },
        ],
      },
      {
        test: /\.(otf|ttf|woff|woff2)(\?.*)?$/,
        loader: "file-loader",
        options: {
          name: "./fonts/[name].[ext]",
          esModule: false,
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/static/index.html"
    }),
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: "app.[name].[contenthash].css",
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};

export default config;