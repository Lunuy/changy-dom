const path = require('path');
//const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './test/index.js',
  target: "web",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              "@babel/plugin-syntax-jsx",
              ["@babel/plugin-transform-react-jsx", { "pragma": "ChangyDom.createElementJSX" }]
            ]
          }
        }
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: []
};