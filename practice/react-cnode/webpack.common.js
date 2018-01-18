const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entryPath = path.resolve(__dirname, 'src');
const devPath = path.resolve(__dirname, 'dist');
const publicPath = '/';


module.exports = {
    entry:{
        index:[
            'babel-polyfill',
             path.resolve(entryPath, 'index.js')
        ],
        vendor:['react','react-dom']
    },    
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'react-cnode',         
            showErrors: true
        })
    ],
    output:{
        publicPath, //编译好的文件，在服务器的路径
        path: devPath, //编译到当前目录
        filename: '[name].bundle.js' //编译后的文件名字
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:{
                    presets: ['react'],
                    compact: 'false',
                    plugins:['syntax-dynamic-import']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.sass', '.scss', '.less', 'jsx']    //后缀名自动补全
    }
}