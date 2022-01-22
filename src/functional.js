module.exports = functionSet = {
    query: '',
    googleSearch: (query) => {
        window.open(`https://www.google.com/search?q=${query}`);
    }
}