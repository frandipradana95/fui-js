const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development", // Bisa "production" untuk optimasi
	entry: "./src/index.js", // Entry point framework
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/, // Untuk file JS
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(), // Bersihkan dist sebelum build
		new HtmlWebpackPlugin({
			template: "./public/index.html", // Gunakan template HTML
		}),
	],
	devServer: {
		static: path.join(__dirname, "dist"),
		compress: true,
		port: 3000,
		open: true,
	},
};
