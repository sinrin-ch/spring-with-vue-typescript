module.exports = {
    productionSourceMap: false,

    devServer: {
        port: 8888,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true
            }
        }
    },

    baseUrl: '/',
    outputDir: '../server/src/main/resources/static',
    assetsDir: undefined,
    runtimeCompiler: undefined,
    parallel: undefined,
    css: undefined,

    pages: {
        index: {
            entry: './src/main',
            template: './src/index.html'
        },
        'm2/index': {
            entry: './src/m2/main.ts',
            template: './src/m2/index.html'
        }
    }
};