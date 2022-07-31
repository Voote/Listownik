const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = {
  // Other rules like entry, output, devserver....,
  plugins: [new NodePolyfillPlugin()],
  loaders: [
    // All files with a '.ts' or '.tsx' extension will be handled 
    // by 'awesome-typescript-loader'.
    { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
  ],

  preLoaders: [
    // All output '.js' files will have any sourcemaps re-processed 
    // by 'source-map-loader'.
    { test: /\.js$/, loader: 'source-map-loader' }
  ]
};
