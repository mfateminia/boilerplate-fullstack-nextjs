const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
    entry: `./server.js`,
    mode: process.env.NODE_ENV || 'development',
    target: 'node',
    externals: [
      nodeExternals({
        modulesDir: './node_modules',
      }),
    ],
    stats: 'errors-only',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: `server.js`,
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ['ts-loader'],
        },
      ],
    },
    plugins: [
      new NodemonPlugin(), // Dong
    ],
  };