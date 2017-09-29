module.exports = {
    entry: [
        './app/main.js',
        './styles/css/main.css'
    ],
    output: {
        path: './app',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './app',
        port: 8100
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
              test: /\.(png|jpg)$/,
              loader: 'url-loader?limit=8192'
            },
            {
              test: /\.css$/,
              loader: "style-loader!css-loader"
            }

        ]
    }
}
