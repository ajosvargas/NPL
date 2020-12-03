const express = require('express');
const app = express();
let path = requrie('path');
const apiResponse = require ('./apiResponse.js');

app.use(express.static('src/client'));

app.get('/', (req, res) => {
    res.sendFile('client/pages/index.html', {root : __dirname + '/..'});
})

const port = 3000;

app.listen(port, () => console.log(`app is running in port: ${port}`));

app.get('/info', (req, res) => {
    res.send(apiResponse);
})