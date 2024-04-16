var path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'prod-build'),
    filename: 'main.js',
    clean:true
  },
  target: 'node', 
  externals: [nodeExternals()],  
};