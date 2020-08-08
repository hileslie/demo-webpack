const { compilation } = require("webpack")

// webpack 启动后，在读取配置的过程中会先执行 new WebpackCleanupPlugin() 初始化一个 WebpackCleanupPlugin 获得其实例。
// 在初始化 compiler 对象后，再调用 WebpackCleanupPlugin.apply(compiler) 给插件实例传入 compiler 对象。
// 插件实例在获取到 compiler 对象后，就可以通过 compiler.plugin(事件名称, 回调函数) 监听到 Webpack 广播出来的事件。
// 并且可以通过 compiler 对象去操作 webpack。

// Compiler 对象包含了 Webpack 环境所有的的配置信息，包含 options，hook，loaders，plugins 这些信息，这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例

// Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。通过 Compilation 也能读取到 Compiler 对象。

class DemoPlugin {
    constructor(options) {
        // console.log('webpack plugin: ', options)
        this.options = options || {};
    }

    apply(compiler) {
        // console.log('compiler: ', compiler)

        // 获取output路径
        const outputPath = compiler.options.output.path;
        console.log('outputPath: ', outputPath)

        compiler.plugin('done', compilation => {
            // console.log('compilation: ', compilation)

            // 获取编译完成 文件名
            const assets = compilation.toJson().assets.map(asset => asset.name);
            console.log('assets文件名: ', assets);
        })

        compiler.plugin('emit', compilation => {
        })
    }
}

module.exports = DemoPlugin;