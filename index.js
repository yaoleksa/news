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
    res.sendFile(path.join(__dirname, './myOwnArticles/policyh.txt'));
});
app.get('/policyi', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/policyi.txt'));
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
    res.sendFile(path.join(__dirname, './myOwnArticles/cultureh.txt'));
});
app.get('/culturei', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/culturei.txt'));
});
app.get('/sport', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/sport.txt'));
});
app.get('/sporth', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/sporth.txt'));
});
app.get('/sporti', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/sporti.txt'));
});
app.get('/secular', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/secular_life.txt'));
});
app.get('/secularh', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/secular_lifeh.txt'));
});
app.get('/seculari', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/secular_lifei.txt'));
});
app.get('/health', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/health.txt'));
});
app.get('/healthh', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/healthh.txt'));
});
app.get('/healthi', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/healthi.txt'));
});
app.get('/economy', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/economy.txt'));
});
app.get('/economyh', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/economyh.txt'));
});
app.get('/economyi', (req, res) => {
    res.sendFile(path.join(__dirname, './myOwnArticles/economyi.txt'));
});
app.post('/', (req, res) => {
    console.log({...req.body});
    const reqObj = {...req.body};
    const reqPage = reqObj.page;
    fs.writeFile(`./myOwnArticles/${reqPage}.txt`, reqObj.content, (err) => {
        console.error(err);
    });
    fs.writeFile(`./myOwnArticles/${reqPage}h.txt`, reqObj.header, (err) => {
        console.error(err);
    });
    fs.writeFile(`./myOwnArticles/${reqPage}i.txt`, reqObj.image, (err) => {
        console.error(err);
    })
    res.send('not empty');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});