const express = require('express')
const bodyParser = require('body-parser')
const dogs = require('./models/dogs')

const app = express()
const port = 3000

// set up the middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/dogs', (request, response) => {
	dogs.add(request.body)
	response.json(request.body)
})

app.get('/dogs', (req, res) => {
	res.json(dogs.getAll())
})

app.listen(port, () => console.log(`api listening on port ${port}`))
