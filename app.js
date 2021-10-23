const express = require('express');
const app = express();
app.use(express.static("public"))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/stage1.html')
})

app.get('/:val', function(req, res) {
    res.sendFile(__dirname + '/' + req.params.val + '.html');
})

app.listen(process.env.PORT || 3000, function() { console.log("server started at http://localhost:3000"); })