const path = require('path') //导入node.JS 中专门操作路径的模块
const HtmlPlugin = require('html-webpack-plugin')

// 创建HTML插件的实例对象
const htmlPlugin = new HtmlPlugin({
    // 制定复制哪个页面
    template: './src/index.html',
    filename: './index.html'
})

//npm install webpack@5.42.1 webpack-cli@4.7.2 -D 安装webpack
//npm install webpack-dev-server@3.11.2 -D 安装dev-server
//npm install html-webpack-plugin html插件
module.exports = {
    // mode 制定构建模式 可选模式有development 和production
    mode : 'development',
    // entry: 制定处理哪个文件
    entry: path.join(__dirname, './src/index.js'),
    // output: 存放的目录
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: '8084',
        //修改host
        host: '127.0.0.1',
        static : {
            
        },
        open:true // 初次打包完成，打开浏览器
        
      
    },
    //插件数组
    plugins: [htmlPlugin],
    module : { //所有第三方文件模块的匹配规则
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    
    }
}
