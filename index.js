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
    res.sendFile(path.join(__dirname, './myOwnArticles/policy.txt'));
});
app.get('/policyh', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/policy.txt'));
});
app.get('/policyi', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/policy.txt'));
});
app.get('/covid', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/covid.txt'));
});
app.get('/covidh', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/covidh.txt'));
});
app.get('/covidi', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/covidi.txt'));
});
app.get('/culture', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/culture.txt'));
});
app.get('/cultureh', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/culture.txt'));
});
app.get('/culturei', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/culture.txt'));
});
app.get('/sport', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/sport.txt'));
});
app.get('/sporth', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/sport.txt'));
});
app.get('/sporti', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/sport.txt'));
});
app.get('/secular', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/secular.txt'));
});
app.get('/secularh', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/secular.txt'));
});
app.get('/seculari', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/secular.txt'));
});
app.get('/health', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/health.txt'));
});
app.get('/healthh', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/health.txt'));
});
app.get('/healthi', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/health.txt'));
});
app.get('/economy', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/economy.txt'));
});
app.get('/economyh', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/economy.txt'));
});
app.get('/economyi', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/economy.txt'));
});
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