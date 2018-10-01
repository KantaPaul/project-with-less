let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = (env) => {
    // console.log('env', env)
    let isProduction = env === 'production';
    let CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: './src/App.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract ({
                    use: [
                        {
                            loader: 'css-loader?url=false',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }, {
                test: /\.less$/,
                use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader?url=false",
                    options: {
                    sourceMap: true,
                    modules: true,
                    camelCase: true,
                    localIdentName: "[local]___[hash:base64:5]"
                    }
                },
                {
                    loader: "less-loader"
                }
                ]
            }, {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    use: [
                    {
                        loader: 'url-loader',
                        query: { limit : 10000 }
                    }
                ]
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}

// console.log(path.join(__dirname, 'public'));