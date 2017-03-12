const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

function happyPackPlugin({name, loaders,}) {
  return new HappyPack({
    id: name,
    verbose: false,
    threadPool: happyThreadPool,
    cache: true,
    loaders,
  });
}

module.exports = happyPackPlugin;
