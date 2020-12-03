const express = require('express');
const app = express();
let path = requrie('path');
const apiResponse = require ('./apiResponse.js');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
})

const port = 3000;

app.listen(port, () => console.log(`app is running in port: ${port}`));

app.get('/info', (req, res) => {
    res.send(apiResponse);
})