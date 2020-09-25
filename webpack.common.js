const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        index:path.join(__dirname,"./pageJs/index.js")
    },
    output:{
        path:path.join(__dirname,"./dist"),
        filename:'[name].js'
    },
    devtool:'source-map',// 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(scss|sass)$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['env']
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1000,
                            esModule:false,  //解决和html-webpack-plugin冲突
                            name: './img/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.html$/,
                use:['html-withimg-loader']
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.join(__dirname,'./index.html'),
        }),
        new webpack.ProvidePlugin({  //解决jquery问题
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery"
          }),
    ]
}