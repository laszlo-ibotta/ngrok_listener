const express = require('express')
const app = express()
const port = 3000

// create text/plain parser
var textParser = express.text({ type: 'text/plain' })

// parse an HTML body into a string
app.use(textParser)

app.get('/', (req, res) => {
  res.send('Received GET /')
})

app.post('/publish', (req, res) => {
  console.log(Date.now() + '\nPath: ' + req.originalUrl + "\nHeader: " + JSON.stringify(req.headers, null, 2) + "\nBody: " + req.body)

  res.send('Received POST /publish\n' + JSON.stringify(req.body, null, 2))
})

app.post('/*', (req, res) => {
  console.log(Date.now() + '\nPath: ' + req.originalUrl + "\nHeader: " + JSON.stringify(req.headers, null, 2) + "\nBody: " + req.body)

  res.send('Received "other" POST request \n' + JSON.stringify(req.body, null, 2))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})