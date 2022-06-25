const express = require('express');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 7000;
const publicPath = path.join(__dirname, './');

const app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(publicPath);
});
app.post('/', (req, res) => {
    fs.writeFile('./myOwnArticles/test.txt', 'test', (err) => {
        console.log(err);
    });
});

app.listen(port, () => {
    console.log(`listen on port: ${port}`);
});