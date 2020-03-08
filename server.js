'use strict'

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()
const matchS = route('/s/:id')
const matchC = route('/c/:id')

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname, query } = parse(req.url, true)

    if (matchC(pathname)) {
      return app.render(req, res, '/c', Object.assign(matchC(pathname), query))
    }

    if (matchS(pathname)) {
      return app.render(req, res, '/s', Object.assign(matchS(pathname), query))
    }

    handle(req, res)
  }).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
