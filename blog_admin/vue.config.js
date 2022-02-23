'use strict'
const path = require('path')
const defaultSettings = require('./src/config.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const isProd = process.env.BUILD_FOR === 'production'
const isTest = process.env.BUILD_FOR === 'test'
const isOnline = isProd || isTest
process.env.VUE_APP_BUILD_FOR = isProd ? 'production' : isTest ? 'test' : 'local'

const name = defaultSettings.title || 'Blog后台管理' // page title
const port = process.env.port || process.env.npm_config_port || 9090 // dev port

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: !isOnline,
  productionSourceMap: !isOnline,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/mapi': {
        target: 'http://localhost:5454/',
        changeOrigin: true,
        pathRewrite: {
          '^/mapi': '',
        },
      },
    },
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('svg-sprite-loader').loader('svg-sprite-loader').options({
      symbolId: 'icon-[name]',
    })
  },
}
