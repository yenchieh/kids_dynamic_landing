var webpack = require("webpack");

module.exports = {
	entry: ['./js/index.js'],
	output: {
		path: "build",
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ["style", "css?sourceMap", 'resolve-url', "sass?sourceMap"]
			},
			{ test: /\.(ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' },
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=5&interlaced=false'
				]
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]

};

//webpack --progress --colors --watch