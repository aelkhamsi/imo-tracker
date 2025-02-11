

module.exports = (app) => {
  const userController = require('./controllers/user.controller')

  app.get('/', (_, res) => res.status(200).send('Hello World!'))

  app.get('/users', userController.getUsers)
}