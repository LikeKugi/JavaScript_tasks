## Webpack dev server (hot reload)

- install dev server

```
npm i webpack-dev-server
```

- in webpack.config.js add

```JavaScript
module.exports = {
  /*...*/
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
```

- in package.json add

```JSON
"scripts": {
    // ...
    "start": "webpack-dev-server --mode development --open" // to start the server
  },
```

- run

```
npm run start
```
