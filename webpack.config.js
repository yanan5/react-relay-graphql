module.exports = {
	entry: "./public/js/app.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	module: {
		rules:[
				{
					test: /\.js$/,
					use: {
						loader: 'babel-loader',
						options: {
							plugins: [__dirname + '/babelRelayPlugin'],
							presets: ['react', 'es2015', 'stage-0']
						}
					}					
				}
		]		
	}
}