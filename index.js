var express = require('express')
var bodyParser = require('body-parser')

var port = 3000
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   console.log(req.query, req.params)
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.get('/post/:postId', (req, res) => {
    //
    res.json({
        data: req.params.postId
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })