import express from 'express'

const app = express()
app.set('port', process.env.SERVER_PORT || 3000)

const http = require('http').Server(app)

export default http
