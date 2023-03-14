const path = require("path");

// the same way
//  const config = {}

module.exports = {
  // mode: 'development' or 'production'
  mode: "production",
  // input
  entry: {
    main: "./src/index.js",
  },
  // output
  output: {
    filename: "main.js", // name of target file
    path: path.resolve(__dirname, "dist"), // output path
  },
};
