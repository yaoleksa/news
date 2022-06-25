const express = require('express');
const path = require('path');
const port = process.env.PORT || 7000;
const publicPath = path.join(__dirname, './');

const app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(publicPath);
});
app.post('/', (req, res) => {
    res.send('+20');
});

app.listen(port, () => {
    console.log(`listen on port: ${port}`);
});