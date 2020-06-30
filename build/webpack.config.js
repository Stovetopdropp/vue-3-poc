const { join, resolve, path } = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.NODE_ENV === 'development';
const isLocal = process.env.NODE_ENV === 'local';
const rootDir = join(__dirname, '..');
const { version } = require('../package.json');

// Configuration options used by webpack build code
const config = {
    isProd,
    isDev,
    isLocal,
    rootDir,
    version,
};

function getCssLoaders(config) {
    const { isProd, isDev, isLocal } = config;
    const addlLoaders = [
        ...(!isLocal ? [{
            loader: 'postcss-loader',
            options: {
                config: {
                    ctx: {
                        enableAutoprefixer: true,
                        minimize: isProd
                    }
                }
            }
        }] : [])
    ];
    const cssLoaders = [
        {
            loader: 'css-loader',
            options: {
                // Number of loaders applied prior to css-loader
                importLoaders: addlLoaders.length
            },
        },
        ...addlLoaders
    ];

    if (!isLocal) {
        return [MiniCssExtractPlugin.loader, ...cssLoaders];
    }

    return ['vue-style-loader', ...cssLoaders];
}

module.exports = () => ({
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
    // Only include core node polyfills in the client build when running
    // locally as they seem to be needed by HMR.  This keeps our client bundle
    // from growing unnecessarily.  See:
    //   https://webpack.js.org/configuration/node/
    ...(config.isLocal === true ? {} : {
        node: false,
    }),
    entry: {
        app: resolve(config.rootDir, 'src/modules/core/js/create-app.js')
    },
    output: {
        path: join(config.rootDir, 'dist'),
        publicPath: '/',
        filename: isProd ? '[name].[chunkhash].js' : '[name].js',
        chunkFilename: isProd ? '_[name].[chunkhash].js' : '_[name].js',
    },
    resolve: {
        alias: {
            // this isn't technically needed, since the default `vue` entry for bundlers
            // is a simple `export * from '@vue/runtime-dom`. However having this
            // extra re-export somehow causes webpack to always invalidate the module
            // on the first HMR update and causes the page to reload.
            'vue': '@vue/runtime-dom',
            '~modules': resolve(config.rootDir, 'src/modules'),
            '~routes': resolve(config.rootDir, 'src/routes'),
            '~scss': resolve(config.rootDir, 'src/scss')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.png$/,
                use: {
                  loader: 'url-loader',
                  options: { limit: 8192 }
                }
            },
            {
                test: /\.css$/,
                use: getCssLoaders(config)
            },
            {
                test: /\.scss$/,
                use: [
                    ...getCssLoaders(config),
                    {
                        loader: 'sass-loader',
                        options: {
                            prependData: `
                                @import "~scss/variables/global-variables.scss";
                                @import "~scss/mixins/global-mixins.scss";
                            `
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new VueLoaderPlugin(),
        ...(!config.isLocal ? [
            new MiniCssExtractPlugin({
                filename: config.isProd ? 'app.[contenthash].css' : 'app.css',
                chunkFilename: config.isProd ? '[name].[contenthash].css' : '[name].css',
                insertInto: function insertInto(/* href */) {
                    return document.querySelector('head');
                }
            })
        ] : []),
    ],
    devServer: {
        inline: config.isLocal,
        hot: config.isLocal,
        stats: 'minimal',
        overlay: true,
        publicPath: '/'
    }
});
