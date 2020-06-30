module.exports = ({ options }) => ({
    plugins: [
        ...(options.enableAutoprefixer ? [require('autoprefixer')] : []),
        ...(options.minimize ? [require('cssnano')({ preset: 'default' })] : []),
    ],
});
