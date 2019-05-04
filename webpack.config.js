const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

module.exports = (env, argv) => {

    return {
        context: path.join(__dirname, 'resources/assets/js'),

        resolve: {
            extensions: [ '.js', '.ts', '.tsx' ]
        },

        entry: './index.tsx',

        output: {
            path: path.join(__dirname, 'public'),
            filename: 'js/app.js',
            pathinfo: false
        },

        optimization: {
            removeAvailableModules: false,
            removeEmptyChunks: false,
            splitChunks: false
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/app.css',
            }),
            new ForkTsCheckerWebpackPlugin({
                tsconfig: path.join(__dirname)
            }),
            new HotModuleReplacementPlugin()
        ],

        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        experimentalWatchApi: true
                    }
                },

                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: path.join(__dirname, 'public/css')
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                url: false
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                //https://github.com/zeit/next.js/issues/1325
                                includePaths: ['resources/assets/sass']
                                .map(d => path.join(__dirname, d))
                            }
                        }
                    ]
                },
            ]
        },

        devServer: {
            hot: true,
            contentBase: path.join(__dirname, 'public'),
            host: 'schoolcms.local',
            proxy: {
                '/': 'http://schoolcms.local'
            }
        }
    }
}
