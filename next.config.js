// Root
const pkg = require('./package')

require('dotenv').config()

module.exports = {
  target: 'serverless',
  poweredByHeader: false,
  generateBuildId: async () => pkg.version,
  env: {
    apiUrl: process.env.API_URL,
    secretToken: process.env.SECRET_TOKEN,
    accessToken: process.env.ACCESS_TOKEN
  }
}
