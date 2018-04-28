# webpack-config
A set of webpack configuration files


## Babel
 * babel-core: Transform ES6 to ES5.
 * babel-loader: Webpack helper that transform JavaScript dependencies.
 * babel-preset-env: Determines which transformations/plugins to use and polyfills.
 * babel-preset-stage-0: Evolving ECMAScript.
 
## Plugins
  * HTML-webpack-plugin: generates an HTML file with 'script' tag injected and minifies the file

## Loaders
  * css-loader: resolves css files.
  * style-loader: injects css content to 'style' tag in the 'head' element of the html.
  * sass-loader: resolves sass files.
  * file-loader: resolves files imports.

## Server
  * http-server: can serve static files of the application.
  * webpack-dev-server: can serve static files of the application and watch them using webpack.
    * contentBase: an array that mention from which paths to server content from.
    * compress: Enable gzip compression for everything served.
    * port: the dev-server port.
    * disableHostCheck: host checking - recommend to leave false as host are vulnerable to DNS rebinding attacks.
    * headers: set of custom headers.
    * open: auto open new tab with the server address.
    * hot: enables HMR (requires the HotModuleReplacement plugin.
  * nodeJS + express: serving our app using nodeJS+express in a way that everytime we run the server, webpackk will run too.
    * webpack-middleware is being used and can handle many webpack options - for more info: https://github.com/webpack/webpack-dev-middleware .