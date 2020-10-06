import webpack from "webpack";
import path from "path";

const baseUrl = process.env.BASE_URL ?? "/";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

const config: webpack.Configuration = {
  mode: isProduction ? "production" : "development",
  entry: {
    main: path.join(__dirname, "src", "index.ts"),
  },
  output: {
    publicPath: baseUrl,
    path: path.join(__dirname, "dist"),
    filename: "scripts/[name].[contenthash:8].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.join(__dirname, "tsconfig.json"),
            },
          },
        ],
      },
    ],
  },
  devtool: isDevelopment ? "inline-source-map" : false,
};

export default config;
