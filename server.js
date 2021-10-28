const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/some/dynamic/path', function(){
  res.send([`one`,`two`,`three`])
})

app.use(function(req, res) {
  res.status(404)
  res.send('404: File Not Found')
})

app.listen(3000, function() {
  console.log("Listening on port 3000!")
})
