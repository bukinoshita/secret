// Packages
const nextRoutes = require('next-routes')

const routes = (module.exports = nextRoutes()) // eslint-disable-line no-multi-assign

routes.add('secret/view', '/secret/v/:id')
