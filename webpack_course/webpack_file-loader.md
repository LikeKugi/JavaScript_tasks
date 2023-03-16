## Webpack file loader

- install plugin

```
npm install file-loader --save-dev
```

- in webpack.config.js add

```JavaScript
module.exports = {
  module: {
    /*...*/
    rules: [
        /*...*/
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
```

- in .js file add

```javaScript
import img from "<path>/<name>.jpg";

document.querySelector(elem).src = img;
```
