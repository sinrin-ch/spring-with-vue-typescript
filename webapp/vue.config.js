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
        },
        https: false,
        open: true //配置自动启动浏览器
    },

    // baseUrl  type:{string} default:'/'
    // 将部署应用程序的基本URL
    // 将部署应用程序的基本URL。
    // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
    // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.
    baseUrl: '/',
    outputDir: '../server/src/main/resources/static',
    assetsDir: undefined,
    runtimeCompiler: undefined,
    parallel: undefined,
    css: undefined,
    lintOnSave: false,
    /*
      构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
      个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
      的字符串，
      注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
    */
    pages: {
        app: {
            entry: './src/main.ts',
            // template: './src/index.html',
            filename: 'index.html'
        },
        'm2': {
            entry: './src/pages/m2/main.ts',
            // template: './src/m2/index.html',
            filename: 'm2/index.html'  // 如果省略filename,生成的html文件的名称会和模块名一样,变成m2.html
        },
        'mobile': {
            entry: './src/pages/mobile/main.js',
            filename: 'mobile/index.html'
        },
        m3: {
            entry: './src/pages/m3/main.ts',
            filename: 'm3/index.html'
        }
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        // subpage: 'src/subpage/main.js'
    }
};