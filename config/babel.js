module.exports = {
  "babelrc": false,
  "presets": process.env.BABEL_ENV ?
    [
      "cqaso-kit",
      // "babel-react-render-defender"
    ] :
    ["cqaso-kit"],
  "plugins": [
    "transform-decorators-legacy"
  ],
  "cacheDirectory": "./webpack_cache/",
};
