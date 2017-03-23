module.exports = {
  'development': {
    "babelrc": false,
    "presets": ["cqaso-kit"],
    "plugins": [
      "transform-decorators-legacy"
    ],
    "cacheDirectory": "./webpack_cache/",
  },

  'production': {
    "presets": [["cq", {target: 'web', modules: 'commonjs', env: 'production'}]],
    "plugins": [
      "transform-decorators-legacy"
    ]
  }
};
