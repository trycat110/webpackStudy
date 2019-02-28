// 处理路径相关
const path = require('path');
// 压缩模块
const Uglifyjs = require('uglifyjs-webpack-plugin');
module.exports = {
    // 入口文件
    entry:'./src/main.js',
    output:{
        // path.resolve把路径解析为绝对路径 __dirname是当前js的目录
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    // webpack4需要制定是否为开发环境
    mode:"development",
    // module配置loader等信息
    module : {
        // rules配置loader信息
        rules:[{
            // 判断如果文件是.css结尾的那么就用css-loader在处理。并不是打包所有的css而是从入口中搜集依赖
            test:/\.css$/,
            use:'css-loader'
        },{
            //打包图片文件
            test:/\.(png|jpg|gif)$/,
            use:[{
                loader:'url-loader',
                // 配置项
                options:{
                    // 当图片小于8k的时候会把图片转为base64格式
                    limit:8192
                }
            }]
        }]
    },
    plugins:[
        // 使用压缩插件
        new Uglifyjs()
    ]
}