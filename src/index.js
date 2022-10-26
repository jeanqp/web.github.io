var express = require('express');
var app = express();
var path = require('path');
port = '8080'
app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html')
 })
app.listen(port, () => {
    console.log("App listening on port " + port)
})