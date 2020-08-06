const path = require('path')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'), // 输出目录
        filename: 'bundle.js',
    }
}