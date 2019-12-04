const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  // 本地调试-serve模式时，修改.env.development VUE_APP_PUB_PATH为"/"
  publicPath: process.env.VUE_APP_PUB_PATH,
  assetsDir: '',
  outputDir: process.env.NODE_ENV === "development" ? 'devdist':'dist',
  filenameHashing: true,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@css': path.resolve(__dirname, './src/assets/css'),
        '@img': path.resolve(__dirname, './src/assets/img')
      }
    },
    externals: [{
      moment: 'moment'
    }],
    plugins: process.env.NODE_ENV === "development" ? []: [new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false,
        compress: {
          drop_debugger: true,
          drop_console: true,
        },
      },
      sourceMap: false,
      parallel: true,
    })]
  },

  devServer: {
    host:"0.0.0.0",
    disableHostCheck:true,
    port: 8081,
    open: true,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    }
  },

  lintOnSave: undefined
}
