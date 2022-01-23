module.exports = functionSet = {
    query: '',
    googleSearch: () => {
        window.open(`https://www.google.com/search?q=${functionSet.query}`);
    }
}