const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common,{
    devServer:{
        contentBase:'./dist', //本地服务器加载所需文件目录
        port:'8089',
        inline:true, //文件修改后实时刷新
        hot:true //热加载
    }
})