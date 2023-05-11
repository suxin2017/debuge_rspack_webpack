const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
module.exports = {
	entry: './src/main.js',
	mode: 'development',
	// plugins: [new WebpackManifestPlugin()]
	// output: {
	// 	libraryTarget:"system"
	// }
}