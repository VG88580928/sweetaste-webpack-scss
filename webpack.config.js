// 可生成 .css 檔案，取代 inline css,例如 style-loader。
// style-loader:將 JS 字符串生成為 style 節點(並附加在 html 的 head 裡)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 目前用來避免在 production 模式 bundle 時產生 LICENSE.txt 檔案 (參考: https://stackoverflow.com/questions/64818489/webpack-omit-creation-of-license-txt-files)
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // 這裡不一定要寫死，可用環境變數來動態變換

  // 現在進入點和出口點默認是以下這樣，可依需要自行調整(webpack5 已經默認幫我們做了)
  // entry: './src/index.js',
  // output: {
  //   filename: 'main.js',
  //   path: path.resolve(__dirname, 'dist'), // 這裡必須使用絕對位置 (path 是 node.js 的物件，使用時記得要先 require 進來)
  // },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'all.css',
    }),
  ],
  module: {
    rules: [
      {
        // test : 是一個正規表示式，主要是去查找目前要載入的檔案，有沒有跟這個正規表示式符合
        test: /\.(s[ac]|c)ss$/i, // 辨識 sass & scss & css
        // use : 表示我們載入檔案要使用的 loader，執行順序 => 陣列最後一個元素開始，往第一個元素的方向執行。
        use: [
          // 為每個包含 CSS 的 JS 文件創建一個 CSS 文件，並且支持 CSS 和 SourceMaps 的按需加載。
          MiniCssExtractPlugin.loader,
          // 將 CSS 轉化成 CommonJS 模塊
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    // 記得 postcss-preset-env 已經有包含 autoprefixer 了
                    'postcss-preset-env',
                    {
                      // 其他选项
                    },
                  ],
                ],
              },
            },
          },
          // 將 Sass 編譯成 CSS
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/, // 只辨識 .mjs or .js 檔案
        exclude: /(node_modules|bower_components)/, // 排除 node_modules 等等
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false, // 禁用剝離注釋功能
      }),
    ],
  },

  // 幫助我們從 bundler/generator 產生的程式碼中找出對應的原始碼，讓我們方便除錯(定位原始碼位置)
  // source-map 生成的 .map 檔如果上傳至網路上(production)並不會讓整個檔案變大，因為這些 .map 檔只會在我們進入瀏覽器 devtools 時才下載
  // 所以我認為只要我們的 code 不要帶有敏感資訊，.map 檔要用於 production 應該是 OK 的(p.s 網上有兩派說法)
  devtool: 'source-map',

  // 這裡會去跑 dist 裡的 index.html (使用 devServer 搭建本地伺服器，每次更新程式碼時，檔案會自動打包上本地 server(還不會打包到 dist 資料夾，要發布網站前再 npm run build 就好)，網站也會自動更新 => Live Reload)
  // 這個本地伺服器基於 node.js 搭建，內部使用 express 框架，可以實現我們想要的瀏覽器自動重新整理顯示我們修改後的結果
  devServer: {
    static: './dist',
    open: true, // 自動打開瀏覽器
  },
};

// 因為 Webpack 預設只能夠打包 JavaScript 和 json 的資料，如果想要額外引入 CSS 或圖片時，必須要再安裝相對應的 loader，例如
// css-loader : 將 css 檔案轉化成 CommonJS 模塊 (讓 js 能夠 import css 檔案)
// style-loader: 主要是要將載入過後的 css 檔案注入至 html head 內的 style tag 裡面 (inline css)

// 注意 ! 在我們載入 css 的時候，這個順序不能錯誤，Webpack 有個很特別的地方是他調用 loader 的順序是從後面到前面，
// 也就是說他會先用 css-loader 載入 CSS 檔案後，在使用 style-loader 將 CSS 注入到 HTML 的 style tag 裡面，
// 如果這個 use 的順序 use: ['css-loader', 'style-loader'] 那這樣 css 會載入錯誤。
