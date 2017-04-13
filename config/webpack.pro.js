process.env.BABEL_ENV = 'production';

const webpack = require('webpack');
const babelrc = require('./babel.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var WebpackChunkHash = require('webpack-chunk-hash');
const mixins = require('../src/style/mixins.js');
const happyPackPlugin = require('./happypack.js');
const path = require('path');
const ROOT_PATH = process.cwd();

const plugins = [
  new HtmlWebpackPlugin({inject: 'body', template: 'index.html'}),

  new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),

  //提取Loader定义到同一地方
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    options: {
      context: '/',

      // NOTE: https://github.com/amireh/happypack/pull/106
      // resolve happypack can't get this.options.plugins
      plugins: function () {
        return plugins;
      },

      postcss: function (webpack) {
        return [
          require('postcss-import')(),
          require('postcss-url')(),
          require('postcss-mixins')({mixins}),
          require('postcss-cssnext')({
            browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
          }),
          require('postcss-nested')()
        ];
      }
    }
  }),

  happyPackPlugin({
    name: 'happypack-javascript',
    loaders: [
      {
        path: 'babel',
        query: babelrc.doc
      }
    ]
  }),

  happyPackPlugin({
    name: 'happypack-component-css',
    loaders: ['style', 'css?modules&localIdentName=[hash:base64:5]', 'postcss']
  }),

  happyPackPlugin({
    name: 'happypack-glocal-css',
    loaders: ['style', 'css?&importLoaders=1', 'postcss']
  }),

  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: [
      'vendor', 'manifest'
    ], // vendor libs + extracted manifest
    minChunks: Infinity
  }),
  new webpack.HashedModuleIdsPlugin(),
  // new WebpackChunkHash()
];

module.exports = {

  target: 'web',

  context: ROOT_PATH + '/src',

  // issue: webpack@2xx cheap-module-source-map can't debug source code
  // TODO: Change when these issues are resolved.
  devtool: 'hidden-source-map',

  entry: {
    main: './index.js'
  },

  output: {
    path: ROOT_PATH + '/docs',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].min.js',
    publicPath: './'
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.json', '.js', '.jsx']
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },

  performance: {
    hints: false
  },

  plugins,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'happypack/loader?id=happypack-javascript',
        include: [
          path.resolve(ROOT_PATH, 'src'),
          path.resolve(ROOT_PATH, 'components'),
        ],
      }, {
        test: /\.css$/,
        include: [
          path.resolve(ROOT_PATH, 'src', 'components'),
          path.resolve(ROOT_PATH, 'components')
        ],
        loaders: 'happypack/loader?id=happypack-component-css'
      }, {
        test: /\.css$/,
        include: [
          /node_modules/,
          path.resolve(ROOT_PATH, 'src', 'style')
        ],
        loaders: 'happypack/loader?id=happypack-glocal-css'
      }, {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        loader: 'url?limit=10000'
      }, {
        test: /\.(ttf|eot|svg|otf)(\?v=\d(\.\d){2})?$/,
        loader: 'file'
      }, {
        test: /\.woff(2)?(\?v=\d(\.\d){2})?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      }
    ]
  },

  // Ensure that webpack polyfills the following node features for use
  // within any bundles that are targetting node as a runtime. This will be
  // ignored otherwise.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    __dirname: true,
    __filename: true
  }
};
