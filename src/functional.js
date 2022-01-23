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

    }
}