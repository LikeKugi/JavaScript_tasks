## Webpack with HTML

- install plugin

```
npm install --save-dev html-webpack-plugin
```

- in webpack.config.js add

```JavaScript
const HtmlWebpackPlugin = require('html-webpack-plugin');
```

```JavaScript
module.exports{
  /*...*/,
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "./src/index.html"), // path to html template
  })],
}
```

after building the project webpack will add .js script to .html script
