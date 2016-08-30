const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './app',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    chunkFileName: '[id].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime'],
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true,
    }),
  ],
};
