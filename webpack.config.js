module.exports = {

    entry: './src/app/index.js',
    output: 
    {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },

    module:
    {
        rules:
        [{
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test:/\.css$/,
            use: 'css-loader'
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use:[     
                    {
                        loader: 'file-loader',
                        options: 
                        {
                            name:"[name].[hash].[ext]",
                            outputPath: "imgs",
                            
                        },  
                    }, 
                ],
        }]
    }

}  