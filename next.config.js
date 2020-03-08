<<<<<<< Updated upstream
'use strict'

module.exports = {
  webpack(cfg) {
    cfg.plugins = cfg.plugins.filter(
      plugin => plugin.constructor.name !== 'UglifyJsPlugin'
    )

    return cfg
  }
=======
module.exports = {
  target: 'serverless'
>>>>>>> Stashed changes
}
