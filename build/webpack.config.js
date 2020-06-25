const { join, resolve, path } = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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

module.exports = () => ({
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
    entry: {
        app: resolve(config.rootDir, 'src/modules/core/js/create-app.js')
    },
    output: {
        //path: resolve(config.rootDir, 'dist'),
        path: join(config.rootDir, 'dist/'),
        publicPath: '/dist/',
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
            '~routes': resolve(config.rootDir, 'src/routes')
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
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { hmr: !isProd }
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        inline: true,
        hot: true,
        stats: 'minimal',
        contentBase: rootDir,
        overlay: true
    }
});
