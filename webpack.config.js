const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html', // 指定使用的模板文件
    filename: 'index.html', // 指定生成的文件名称(存在于内存中)
})
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const DemoPlugin = require('./plugins/demoPlugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'), // 输出目录
        filename: 'bundle.js',
    },
    plugins: [
        htmlPlugin,
        new VueLoaderPlugin(),
        new DemoPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader', 'postcss-loader']
            // },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader']
            // },
            {
                test: /\.jpg|jpeg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use: ['url-loader?limit=50000'],
            },
            {
                test: /\.js$/,
                use: [
                    path.resolve('./loaders/flashback.js'),
                    path.resolve('./loaders/capital.js'),
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
        ]
    },
}