var webpack = require('webpack');

var config = {
    // Points to the main application module.
    entry: [
        './source/app.js'
    ],
    // Tells wepback where to save the single JavaScript file 
    // containing all the modules packed in the correct order.
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    // You pass all .js files through Babel, the JavaScript compiler
    // that transforms all JSX into plain JavaScript code.
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        contentBase: './public',
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};

module.exports = config;