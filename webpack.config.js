module.exports = {
    entry: {
        babel: './src/babel.js',
        metal: './src/metal.js'
    },
    output: {
        path: './bin',
        filename: '[name].bundle.js',
        libraryTarget: 'this'
    },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
};
