const express = require('express')
const app = express();
let path = requrie('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./src/client/view/index.html'));
})

const port = 3000;

app.listen(port, () => console.log(`app is running in port: ${8080}`));

