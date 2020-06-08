const path = require('path');

module.exports = {
    mode: "none",
    entry: './lib/index.js',
    output: {
        filename: 'sdk.js',
        path: path.resolve(__dirname, 'dist'),
    },
};