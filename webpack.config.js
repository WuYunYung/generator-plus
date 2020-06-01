const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode:'development',
  entry: './src/index.js',//入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),//出口路径
    filename: 'main.js',//出口文件
    publicPath:'dist/'//静态资源路径
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ] ,
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.esm.js',
    }
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}