var path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development'
  const isNone = argv.mode === 'none'
  return {
    entry: './code/src/main.js',
    mode: argv.mode,
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      minimize: !isDev
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
      filename: 'build.js'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'

        },
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        },
        {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
                "postcss-loader",

          // Compiles Sass to CSS
          'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    },
    devServer: {
      historyApiFallback: true,
      allowedHosts: ['test.example.com'],
      compress: true,
      host: '0.0.0.0',
      contentBase: path.join(__dirname, 'code')
    },
    performance: {
      hints: false
    },
    plugins: [
      new MiniCssExtractPlugin('main.css'),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: { inline: false }
        }
      }),
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NONPROD: isDev
        }
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer()
            ]
        }
      })
    ],
    devtool: isDev ? '#eval-source-map' : isNone ? false : 'source-map',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 500
    }
  }
}
