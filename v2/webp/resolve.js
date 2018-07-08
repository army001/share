// const path = require('path');

module.exports = {
  extensions: ['ts', 'tsx', 'js', 'jsx', 'less', 'css'].map(ext => `.${ext}`),
  alias: {
    // '@': path.resolve(__dirname, '../node_modules')
  },
  symlinks: false
};
