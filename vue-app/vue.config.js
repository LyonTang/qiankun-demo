const port = 18081
const {name} = require('./package.json')

module.exports = {
    publicPath: '/vue-app',
    devServer: {
        hot: true,
        disableHostCheck: true,
        host: '0.0.0.0',
        port,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        }
    }
}