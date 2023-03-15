## Clean webpack plugin

```
npm i -D clean-webpack-plugin
```

- in webpack.config.js add

```JavaScript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
```

```JavaScript
module.exports{
  /*...*/,
  plugins: [new CleanWebpackPlugin(),],
}
```
