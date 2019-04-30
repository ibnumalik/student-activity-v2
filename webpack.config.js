const path = require('path');

module.exports = {
    context: path.join(__dirname, 'resources/assets/js'),

    resolve: {
        extensions: [ '.js', '.ts', '.tsx' ]
    },

    entry: './app.tsx',

    output: {
        path: path.join(__dirname, 'public/js'),
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
    }
}
