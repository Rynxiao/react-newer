module.exports = {
    entry: {
        app: ['./webpack.js']
    },
    output: {
        path: './assets/',
        filename: '[name].bundle.js',
        publicPath: './assets/'
    },
    module: {
        loaders: [
            // npm install babel-loader
            {test: /\.js|\.jsx$/, loader: 'babel'},
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
};