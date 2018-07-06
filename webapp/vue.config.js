module.exports = {
    productionSourceMap: false,

    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true
            }
        }
    },

    baseUrl: undefined,
    outputDir: '../server/src/main/resources/static',
    assetsDir: undefined,
    runtimeCompiler: undefined,
    parallel: undefined,
    css: undefined
}