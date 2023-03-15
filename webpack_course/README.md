# WebPack tutorial

## Init project

- package.json

```
npm init -y
```

- install webpack

```
npm install -D webpack webpack-cli
```

---

## config Webpack

- create file

```
webpack.config.js
```

- webpack config for input and output

```JavaScript
const path = require("path"); // NODE module for working with OS

module.exports = {

  // mode: 'development' or 'production'
  mode: "production",

  // input
  entry: {
    main: "./src/index.js", // path and name of input file
  },

  // output
  output: {
    filename: "main.js", // name of target file
    path: path.resolve(__dirname, "dist"), // output path
  },
};
```

- run webpack

```
npx webpack
```

- create mods

```JSON
/*
in package.json
---------------
*/
"scripts": {
    /*...*/
    "dev": "npx webpack --mode development", /* development mode */
    "build": "npx webpack --mode production" /* production mode */
  },
```

run build mods

```
npm run dev
npm run build
```

---

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

---

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
