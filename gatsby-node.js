const path = require('path');

exports.modifyWebpackConfig = function({config, env}) {
  config.merge({
    resolve: {
      alias: {
        "@src": path.resolve(process.cwd(), 'src/')
      }
    }
  });
  return config;
}
