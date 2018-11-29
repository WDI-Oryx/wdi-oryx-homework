// where does your application begin?

const config = {
    entry:["./src/js/app.js"],
    output:{
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.js$/, //end file name is .js
                exclude: /node_modules/,
                loaders:["babel-loader"]
            }
        ]
    },
    devServer: {
        contentBase: "./dist"
    }
};



module.exports = config;