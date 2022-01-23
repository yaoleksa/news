module.exports = functionSet = {
    query: '',
    googleSearch: () => {
        window.open(`https://www.google.com/search?q=${functionSet.query}`);
    },
    currentDate: new Date(),
    weekDays: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'],
    months: ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'],
    getCurrentDate: () => {
        return functionSet.weekDays[functionSet.currentDate.getDay()] + ', ' + 
               functionSet.currentDate.getDate() + ' ' +
               functionSet.months[functionSet.currentDate.getMonth()] + ' ' +
               functionSet.currentDate.getFullYear() + ' року'

    },
    getDefaultWeather: () => {
        fetch('http://api.weatherstack.com/current?access_key=899532d9d1dac46fce4e7b0aa3ef92d3&query=Lviv')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.log(e.message);
        });
    },
    getCurrentWether: () => {
        let latitude = 0;
        let longitude = 0;
        function success(pos) {
            latitude = pos.coords.latitude;
            longitude = pos.coords.longitude;
            fetch(`http://api.weatherstack.com/current?access_key=899532d9d1dac46fce4e7b0aa3ef92d3&query=${latitude},${longitude}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(e => {
                console.log(e.message);
            });
        }
        function errors(posErr) {
            if(posErr.code == 1) {
                functionSet.getDefaultWeather();
            }
            console.error(`ERROR ${posErr.code}: ${posErr.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, errors);
    }
}