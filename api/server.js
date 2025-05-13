// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(cors({
    origin: [
      'http://localhost:5173',
      'https://aaaavue-git-main-hallzyxs-projects.vercel.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }))

server.use(middlewares)
//server.use(jsonServer.bodyParser)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/v1/*': '/$1'
}))





server.use(router)
server.listen(3001, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server