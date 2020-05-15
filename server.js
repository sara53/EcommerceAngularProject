const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors");
app.use(cors());
app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
app.use(express.static(__dirname + '/dist/project'));


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/project/index.html'));
});

app.listen(process.env.PORT || 9999);
