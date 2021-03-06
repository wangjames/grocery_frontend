const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
	  rules: [
	    {
	      test: /\.jsx$/,
	      use: {
	        loader: 'babel-loader',
	        
	      }
	    }
	  ]
  }
};
