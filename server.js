const express = require('express')
let app = express()
const path = require('path')

const api = require('./server/routes/api')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)
app.listen(2345, () => console.log('Application running on port 2345'))