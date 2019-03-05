// Packages
const nextRoutes = require('next-routes')

const routes = (module.exports = nextRoutes()) // eslint-disable-line no-multi-assign

routes.add('secret/v', '/secret/v/:id')
