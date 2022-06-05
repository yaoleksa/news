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
        return currentDate.getHours() + ':' + 
                (currentDate.getMinutes().toString().length < 2 ?
                '0' + currentDate.getMinutes() :
                currentDate.getMinutes()) + ':' + 
                (currentDate.getSeconds().toString().length < 2 ?
                '0' + currentDate.getSeconds() : currentDate.getSeconds());
    },
    cityMap: {
        "Lviv": "Погода у Львові: ",
        "Kyiv": "Погода в Києві: ",
        "Kharkiv": "Погода в Харкові: ",
        "Odesa": "Погода в Одесі: ",
        "Dnipro": "Погода в Дніпрі: ",
        "Donetsk": "Погода в Донецьку: ",
        "Zaporizhzhia": "Погода в Запоріжжі: ",
        "Kryvyi Rih": "Погода в Кривому Розі: ",
        "Mykolaiv": "Погода в Миколаєві: ",
        "Sevastopol": "Погода в Севастополі: ",
        "Mariupol": "Погода в Маріуполі: ",
        "Luhansk": "Погода в Луганську: ",
        "Vinnytsia": "Погода у Вінниці: ",
        "Chernihiv": "Погода в Чернівцях: ",
        "Kherson": "Погода в Херсоні: ",
        "Poltava": "Погода в Полтаві: ",
        "Khmelnytskyi": "Погода в Хмельницькому: ",
        "Cherkasy": "Погода в Черкасах: ",
        "Chernivtsi": "Погода в Чернівцях: ",
        "Zhytomyr": "Погода в Житомирі: ",
        "Sumy": "Погода в Сумах: ",
        "Rivne": "Погода в Рівному: ",
        "Ivano-Frankivsk": "Погода в Івано-Франківську: ",
        "Ternopil": "Погода в Тернополі: ",
        "Kropyvnytskyi": "Погода в Кропивницькому: ",
        "Lutsk": "Погода в Луцьку: ",
        "Uzhhorod": "Погода в Ужгороді"
    },
    weatherData: null,
    dataWasRetrieved: false,
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
    getLocalWeather: async () => {
        async function success(pos) {
            return await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&APPID=132481af3894196312f3bf922a6a66d4`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                functionSet.weatherData = data;
            })
            .catch(e => {
                functionSet.getDefaultWeather();
                console.log(e.message);
            });
        }
        function errors(posErr) {
            if(posErr.code == 1) {
                functionSet.getDefaultWeather();
            }
            console.error(`ERROR ${posErr.code}: ${posErr.message}`);
            console.log(userPermission);
        }
        await navigator.geolocation.getCurrentPosition(success, errors);
    },
    getNews: async () => {
        const url = "https://api.newscatcherapi.com/v2/search?q=all&lang=uk&countries=UA";
        const request = new Request(url);
        return await fetch(request, {
            headers: {
                'x-api-key': 'mzj4HvlacbRH43uwmiHoRfZfm2YTn8UxVN1cns7zruI'
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });
    }
}