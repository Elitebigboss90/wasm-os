const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const path = require('path')

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  config.plugins = config.plugins || [];
  config.experiments = config.experiments || {}

  config.experiments = {...config.experiments,
    asyncWebAssembly: true,
    syncWebAssembly: true,
  }

  // Push the WasmPackPlugin to the plugins array
  config.plugins.push(
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, 'crate'),
      args: '--log-level warn',
      extraArgs: '--no-typescript',
    })
  );

  return config;
});
