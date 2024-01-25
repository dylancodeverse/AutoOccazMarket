const webpack = require('webpack');

module.exports = function override(config, env) {
  // Ajoutez les polyfills pour les modules manquants
  config.resolve.fallback = {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify")
  };

  // Ajoutez un plugin webpack pour éviter les erreurs liées à "stream-browserify"
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
    })
  );

  return config;
};
