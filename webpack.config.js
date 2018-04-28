const path = require('path');

const OUTPUT_PATH = path.resolve(__dirname, './dist');
const BUNDLE_FILENAME = 'app.bundle.js';

module.exports = {
  entry: './src/app.js',
  output: {
    path: OUTPUT_PATH,
    filename: BUNDLE_FILENAME
  }
}
