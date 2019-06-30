
const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin"); //删除之前的打包文件

const HtmlWebPackPlugin = require("html-webpack-plugin"); //打包html



module.exports = (env, argv) => {

  return  {

    //入口
    entry: {
      app: './src/index.js',
    },

    //输出
    output: {
      //[name]会使用在入口entry中定义的属性名称作为参数传入
      filename: '[name].[chunkhash:7].js',
      path: path.resolve(__dirname, 'dist'),
      //用于启动server服务所需配置
      publicPath: './'
    },

    module: {
      rules: [

        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: [{
            loader: "babel-loader"
          }]
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        },
       ]
    },

    plugins: [
      new CleanWebpackPlugin(['dist']),

      //添加HtmlWebpackPlgin插件
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),

    ],

    optimization: {
      //优化，代码拆分，分离公共文件和业务文件
      minimize: false,
    }


  }
}
