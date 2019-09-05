var webpack = require('webpack')

module.exports = {
    mode: "development",
    // https://danbruder.com/blog/typeerror-require-is-not-a-function-webpack-faunadb/
    plugins: [
        new webpack.DefinePlugin({ "global.GENTLY": false })
    ],
    // node: {
    //     __dirname: true,
    // },
    // alias: {
    //     'inherits': 'inherits/inherits_browser.js',
    //     'superagent': 'superagent/lib/client',
    //     'emitter': 'component-emitter',
    // }
}