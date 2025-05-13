// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const cors = require('cors')
server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/v1/*': '/$1',
    '/product/:resource/:id/show': '/:resource/:id'
}))

server.use(cors({
    origin: ['http://localhost:5173', 'https://aaaavue-git-main-hallzyxs-projects.vercel.app']
  }))

server.use(router)
server.listen(3001, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server