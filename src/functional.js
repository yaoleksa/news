const regeneratorRuntime = require('regenerator-runtime');

module.exports = functionSet = {
    query: '',
    googleSearch: () => {
        if(functionSet.query == 'edit_news_site317') {
            document.getElementById('left_container').hidden = true;
            document.getElementById('input_article').hidden = false;
            return;
        }
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
        "Lviv": "Температура у Львові: ",
        "Kyiv": "Температура в Києві: ",
        "Kharkiv": "Температура в Харкові: ",
        "Odesa": "Температура в Одесі: ",
        "Dnipro": "Температура в Дніпрі: ",
        "Donetsk": "Температура в Донецьку: ",
        "Zaporizhzhia": "Температура в Запоріжжі: ",
        "Kryvyi Rih": "Температура в Кривому Розі: ",
        "Mykolaiv": "Температура в Миколаєві: ",
        "Sevastopol": "Температура в Севастополі: ",
        "Mariupol": "Температура в Маріуполі: ",
        "Luhansk": "Температура в Луганську: ",
        "Vinnytsia": "Температура у Вінниці: ",
        "Chernihiv": "Температура в Чернівцях: ",
        "Kherson": "Температура в Херсоні: ",
        "Poltava": "Температура в Полтаві: ",
        "Khmelnytskyi": "Температура в Хмельницькому: ",
        "Cherkasy": "Температура в Черкасах: ",
        "Chernivtsi": "Температура в Чернівцях: ",
        "Zhytomyr": "Температура в Житомирі: ",
        "Sumy": "Температура в Сумах: ",
        "Rivne": "Температура в Рівному: ",
        "Ivano-Frankivsk": "Температура в Івано-Франківську: ",
        "Ternopil": "Температура в Тернополі: ",
        "Kropyvnytskyi": "Температура в Кропивницькому: ",
        "Lutsk": "Температура в Луцьку: ",
        "Uzhhorod": "Температура в Ужгороді"
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
                const url = 'https://free-news.p.rapidapi.com/v1/search?q=*&lang=uk';

                const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'dc40d2b288msh88ced99c0191b37p144f83jsne853bb67a11f',
                    'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
                }
                };

                const response = await fetch(url, options)
                    .then(res => {
                        return res.json();
                    })
                    .then(json => {
                        this.favorite = json;
                        return json;
                    })
                    .catch(err => console.error('error:' + err));
                    return response;
            }
}