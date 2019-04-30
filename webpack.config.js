const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {

    return {
        context: path.join(__dirname, 'resources/assets/js'),

        resolve: {
            extensions: [ '.js', '.ts', '.tsx' ]
        },

        entry: './app.tsx',

        output: {
            path: path.join(__dirname, 'public'),
            filename: 'js/app.js'
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/app.css',
            })
        ],

        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader',
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
        }
    }
}
