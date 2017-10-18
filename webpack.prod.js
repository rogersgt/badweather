const path = require('path');
const webpack = require('webpack');


const env = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"production"'
  }
});

// const uglify = new webpack.optimize.UglifyJsPlugin({
//   compress: {
//     warnings: false
//   }
// });

const occur = new webpack.optimize.OccurrenceOrderPlugin();

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          scss: 'vue-style-loader!css-loader!sass-loader',
          sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    env,
    // uglify,
    occur
  ]
};
