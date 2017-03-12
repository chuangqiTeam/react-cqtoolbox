const webpack = require('webpack');
const babelrc = require('./babel.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var WebpackChunkHash = require('webpack-chunk-hash');
const mixins = require('../src/style/mixins.js');
const happyPackPlugin = require('./happypack.js');
const path = require('path');
const ROOT_PATH = process.cwd();

process.env.BABEL_ENV = 'production';

const plugins = [
    new HtmlWebpackPlugin({
        inject: 'body',
        template: 'index.html',
    }),

    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),

    //提取Loader定义到同一地方
    new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true,
        options: {
            context: '/',

            // NOTE: https://github.com/amireh/happypack/pull/106
            // resolve happypack can't get this.options.plugins
            plugins: function () {
                return plugins;
            },

            eslint: {
                configFile: path.join(__dirname, '../.eslintrc'),
                useEslintrc: false
            },

            postcss: function (webpack) {
                return [
                    require('postcss-smart-import')({addDependencyTo: webpack}),
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
                query: babelrc
            }
        ]
    }),

    happyPackPlugin({
        name: 'happypack-component-css',
        loaders: ['style', 'css?modules&localIdentName=[name]__[local]', 'postcss']
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
      name: ['vendor', 'manifest'], // vendor libs + extracted manifest
      minChunks: Infinity,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest'
    }),
];

module.exports = {

    target: 'web',

    context: ROOT_PATH + '/src',

    // issue: webpack@2xx cheap-module-source-map can't debug source code
    // TODO: Change when these issues are resolved.
    devtool: 'hidden-source-map',

    entry: {
      vendor: require.resolve('./polyfills.js'),
      main: './index.js',
    },

    output: {
        path: ROOT_PATH + '/build',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].min.js',
        publicPath: '/'
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
                include: path.resolve(ROOT_PATH, 'src')
            }, {
                test: /\.jsx?$/,
                include: path.resolve(ROOT_PATH, 'src'),
                enforce: 'pre',
                loader: 'eslint'
            }, {
                test: /\.css$/,
                include: [
                    path.resolve(ROOT_PATH, 'src', 'component'),
                    path.resolve(ROOT_PATH, 'src', 'page'),
                    /react-toolbox/,
                ],
                loaders: 'happypack/loader?id=happypack-component-css'
            }, {
                test: /\.css$/,
                exclude: [
                    path.resolve(ROOT_PATH, 'src', 'component'),
                    path.resolve(ROOT_PATH, 'src', 'page'),
                    /react-toolbox/,
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
