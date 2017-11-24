const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
    //publicPath: '/client/dist/js'
  },

  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.PNG$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              //limit: 10000,
              publicPath: '/js',
              outputPath: path.join(__dirname, '/client/dist/js/')
            },
          }
        ],
        
      },
      // Process JS with Babel.
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/client/src'),
        use: [
          {
            loader:'babel-loader',
            query: {
              presets: ["react", "es2015"]
            }
          }
        ],
      },

      {
        test: /\.css$/,
        use: [
          {loader:'style-loader'},
          {loader:'css-loader'},
          
        ],
      },
      
    ],
  }, 

  
   plugins: [
     new CleanWebpackPlugin(['client/dist'])
   ],
 

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};
