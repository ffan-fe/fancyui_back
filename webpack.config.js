import webpack from 'webpack';
import htmlWebpackPlguin from 'html-webpack-plugin';
import yargs from 'yargs';
import path from 'path';

const appName = yargs.argv.app || 'index';

module.exports = {
  context: __dirname + '/src',
  entry: './app/app.js',
  output: {
    path: `${__dirname}/dist/`,
    filename: '[name].bundle.js'
    // chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts-loader'},
      {test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.css$/,  loader: 'style!css'},
      {test: /.(gif|jpg|png)$/, loader: `file?name=img-[hash].[ext]`},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : require.resolve('file-loader')}
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new htmlWebpackPlguin({
      template: `./index.html`,
      hash: true,
      inject: 'body',
      title: 'Anaheim electronics Skin and Components'
    }),
     new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1;
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};