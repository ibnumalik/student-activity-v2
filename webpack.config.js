const path = require('path');
// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {

    return {

        context: path.resolve(__dirname),

        entry: {
            app: [
                './resources/js/index.ts'
            ]
        },

        output: {
            filename: '[name].js',
            chunkFilename: '[name].bundle.js',
            path: path.resolve(__dirname, 'public'),
        },

        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all'
                    }
                }
            }
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        'ng-annotate-loader',
                        'ts-loader',
                    ]
                },

                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: argv.mode === 'development' ?
                                'style-loader' :
                                MiniCssExtractPlugin.loader
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
                                includePaths: ['resources/sass']
                                    .map(d => path.join(__dirname, d))
                            }
                        }
                    ]
                },

                {
                    test: /\.(jpe?g|png|gif|ico)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[path][name].[ext]'
                            }
                        }
                    ]
                },
            ],
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            })
        ],

        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        }
    }
};
