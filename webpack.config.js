var path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    clean:true
  },
  target: 'node', 
  externals: [nodeExternals()],  
};