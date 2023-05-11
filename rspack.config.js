const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
class Plugin {
  /**
   * 
   * @param {import('@rspack/core').Compiler} compiler 
   */
  apply(compiler) {
    compiler.hooks.done.tapAsync("p", (stats) => {
      console.log(stats);
    })
  }

}
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.jsx",
  },
  stats: { preset: "normal" },
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
    provide: {
      aaa: ["./aaa"],
    },
  },
  plugins: [new Plugin()],
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
};
