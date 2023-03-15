## CSS with webpack

- install CSS loader

```
npm install --save-dev css-loader
```

- Also required [_Webpack style-loader_](webpack_style-loader.md) plugin

- in webpack.config.js add

```JavaScript
const HtmlWebpackPlugin = require('html-webpack-plugin');
```

```JavaScript
module.exports = {
    /*...*/
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // !!! IMPORTANT ORDER
      },
    ],
  },
};
```

- in main script.js file add

```JavaScript
import css from "file.css"; // import css module from "<path_to_file.css>"
```
