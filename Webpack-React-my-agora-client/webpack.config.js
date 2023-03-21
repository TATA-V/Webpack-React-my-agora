const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "app.bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"], ["@babel/preset-react", { runtime: "automatic" }]],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // css를 줄여주는 플러그인
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // 이 플러그인은 빌드할 시 이렇게 따로 설정해줄 수도 있습니다. package.json에 가셔서
    // 커맨드를 어떻게 주었는지 확인해보세요.
    new BundleAnalyzerPlugin({
      //분석 모드는 뭘로 할 건지
      analyzerMode: "static",
      //빌드하고 나서 바로 열 건지
      openAnalyzer: false,
      //파일 만들 건지
      generateStatsFile: true,
      //파일 이름 뭘로 할 건지
      statsFilename: "bundle-report.json",
    }),
  ],
  devServer: {
    static: "./docs",
    port: 3001,
  },
};
