// Root
const pkg = require('./package')

require('dotenv').config()

module.exports = {
  poweredByHeader: false,
  generateBuildId: async () => pkg.version,
  publicRuntimeConfig: { API_URL: process.env.API_URL }
}
