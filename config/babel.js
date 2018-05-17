module.exports = {
  'development': {
    "babelrc": false,
    "presets": ['cq'],
    "plugins": [
      "transform-decorators-legacy"
    ],
    "cacheDirectory": "./webpack_cache/",
  },

  'doc': {
    "babelrc": false,
    "presets": ['cq'],
    "plugins": [
      "dev-expression",
      "transform-decorators-legacy"
    ],
    "cacheDirectory": "./webpack_cache/",
  },

  'production': {
    "presets": [["cq", {target: 'web', modules: 'commonjs', env: 'production'}]],
    "plugins": [
      "dev-expression",
      "transform-decorators-legacy",
      [
        "transform-react-remove-prop-types",
        {
          "removeImport": true
        }
      ]
    ]
  }
};
