import path from 'path'

module.exports = ({ platform }, defaults) => ({
  ...defaults,
  entry: `./index.js`,
  resolve: {
    ...defaults.resolve,
    modules: [
      path.resolve(__dirname, '../common'),
      path.resolve(__dirname, './node_modules')
    ]
  }
});