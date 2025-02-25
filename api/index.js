const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
dotenv.config()

app.use(express.static('public'))
app.use(cors())

// ROUTES
require('./src/routes')(app)

// DATABASE CONNECTION
require('./src/database')

const PORT = process.env.API_PORT || 5000

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`)
})