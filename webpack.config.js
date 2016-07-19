var path = require('path');

module.exports = {
    name: 'backend dev hot middleware',
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, '/lib/server/public/build'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader!css-path-loader!sass-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader!css-path-loader!less-loader']
            },
            {
                test: /\.js$/,
                loaders: ['babel', 'html-path-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&limit=3000&name=font/[hash:8].[name].[ext]'
                ]
            }
        ]
    }
};