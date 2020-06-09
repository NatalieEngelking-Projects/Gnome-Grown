module.exports = {
entry: __dirname + "/client/index.jsx",
module: {
    rules: [
    {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
        loader: "babel-loader",
        options: { presets: ["@babel/preset-react", "@babel/preset-env"] },
        },
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
        loaders: ['file-loader?hash=sha512&digest=hex&name=/images/[hash].[ext]']
    }
    ],

        },
        output: { filename: "bundle.js", path: __dirname + "/client/dist" },
}; 