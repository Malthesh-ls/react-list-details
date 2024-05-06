const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    port: 3000,
    historyApiFallback: true
  },
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Dev'),
    }),
  ],
}