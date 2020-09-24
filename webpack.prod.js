const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 引入CleanWebpackPlugin插件

module.exports = merge(common, { // 将webpack.common.js合并到当前文件
    plugins: [
        new CleanWebpackPlugin(),  // 所要清理的文件夹名称
    ]
})