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
