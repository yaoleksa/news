const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const port = process.env.PORT || 7000;
const publicPath = path.join(__dirname, './');

const app = express();

app.use(express.static(publicPath));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(publicPath);
});
app.post('/', (req, res) => {
    fs.writeFile('./test.txt', 'test');
    res.send('+20');
});

app.listen(port, () => {
    console.log(`listen on port: ${port}`);
});