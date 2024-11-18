
const express = require('express')
const colors = require('ansi-colors')
const app = express()
const port = 3010

// middleware
app.use(express.static('public'))
app.use(express.json())

// routes
app.use(require('./routes/api/v1/recipes'))
// app.use('/api/v1', require('./routes/api/v1/recipes'))  This was being weird for some reason so I used the one above instead
app.use('/', require('./routes/pages/recipes'))

// server
const url = colors.blue('http://localhost:3010/')
const message = `Server is running on port ${port}. Visit ${url} in your browser.`
app.listen(port, () => console.log(message))