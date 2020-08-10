const path = require("path")
const htmlWpP = require("html-webpack-plugin") 
module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output:{
        filename: '[name].bundle.js',
        path: path.join(__dirname, "/dist")
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                commons:{
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new htmlWpP({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]

}