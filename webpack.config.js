let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
	
    entry: {
	    app: './src/js/index.js',
	    print: './src/js/components/print.js'
    },

    devtool: 'inline-source-map',

    plugins: [
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
	    title: 'This is GREAT'
	})
    ],
	
    output: {
        filename: '[name].app.js',
	path: path.resolve(__dirname, 'public')
    },
	
    module: {
        rules: [
	    {
                test: /\.css$/,
	        use: [
	            'style-loader',
		    'css-loader'
	        ]
	    },
	    {
		test: /\.(png|svg|jpg|gif)$/,
		use: [
                    'file-loader'
		]
	    }
	]
    }
}

