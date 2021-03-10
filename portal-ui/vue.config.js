const port = 18080

module.exports = {
    publicPath: '/portal-ui',
    devServer: {
        hot: true,
        disableHostCheck: true,
        host: '0.0.0.0',
        port,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
}