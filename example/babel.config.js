const path = require('path');
const pak = require('../package.json');

module.exports = {
  plugins: [
    ["module:react-native-dotenv"],
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
        },
      },
    ],
  ],
};
