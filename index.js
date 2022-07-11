const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 7000;
const publicPath = path.join(__dirname, './');

const app = express();

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.sendFile(publicPath);
});
app.get('/policy', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/test.txt'));
})
app.post('/', (req, res) => {
    console.log({...req.body});
    const reqObj = {...req.body};
    fs.writeFile('./myOwnArticles/test.txt', reqObj.name, (err) => {
        console.log(err);
    });
    res.send('not empty');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});