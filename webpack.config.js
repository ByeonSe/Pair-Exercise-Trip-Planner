const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
// the absolute path for the directory where we want the output to be placed
    path: path.resolve(__dirname + '/public'),
    filename: 'bundle.js'
  }
};