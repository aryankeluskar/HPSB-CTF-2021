const express = require('express');
const app = express();
app.use(express.static("public"))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/stage1.html')
})

app.get('/:val', function(req, res) {
    try {
        res.sendFile(__dirname + '/' + req.params.val + '.html');
    } catch (error) {
        res.write("Wrong Flag \n 404 NOT FOUND")
    }

})

app.listen(process.env.PORT || 3000, function() { console.log("server started at http://localhost:3000"); })