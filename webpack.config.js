module.exports = {
    entry: './src/main.js',
    output: {
        path: './bin',
        filename: 'metal-standalone.bundle.js'
    },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
     }
};
