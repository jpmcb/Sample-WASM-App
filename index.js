const express = require('express');
const path = require('path')

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/test.html'));
});

app.listen('8080', () => {
    console.log('WebAsm app listening on port 8080');
});