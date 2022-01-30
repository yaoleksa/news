const regeneratorRuntime = require('regenerator-runtime');

module.exports = functionSet = {
    query: '',
    googleSearch: () => {
        window.open(`https://www.google.com/search?q=${functionSet.query}`);
    },
    weekDays: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'],
    months: ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'],
    getCurrentDate: () => {
        let currentDate = new Date();
        return functionSet.weekDays[currentDate.getDay()] + ', ' + 
               currentDate.getDate() + ' ' +
               functionSet.months[currentDate.getMonth()] + ' ' +
               currentDate.getFullYear() + ' року';

    },
    getCurrentTime: () => {
        let currentDate = new Date();
        return currentDate.getHours() % 12 + ':' + 
                (currentDate.getMinutes().toString().length < 2 ?
                '0' + currentDate.getMinutes() :
                currentDate.getMinutes()) + ':' + 
                (currentDate.getSeconds().toString().length < 2 ?
                '0' + currentDate.getSeconds() : currentDate.getSeconds());
    },
    userDeniedLocationRequest: 0,
    getDefaultWeather: () => {
        return fetch('http://api.openweathermap.org/data/2.5/weather?q=Lviv&units=metric&APPID=132481af3894196312f3bf922a6a66d4')
        .then(res => {
            return res.json();
        })
        .then(data => {
            return data;
        })
        .catch(e => {
            console.log(e.message);
        });
    },
    localWeatherData: null,
    dataWasRetrieved: false,
    getLocalWeather: async () => {
        function success(pos) {
            return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&APPID=132481af3894196312f3bf922a6a66d4`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                functionSet.localWeatherData = data;
            })
            .catch(e => {
                console.log(e.message);
            });
        }
        function errors(posErr) {
            if(posErr.code == 1) {
                functionSet.userDeniedLocationRequest = posErr.code;
                functionSet.getDefaultWeather();
            }
            console.error(`ERROR ${posErr.code}: ${posErr.message}`);
        }
        
        navigator.geolocation.getCurrentPosition(success, errors);
    }
}