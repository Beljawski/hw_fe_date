// Разобрать вопросы: 


// 1) Что такое класс Date, что из себя представляет дата 
        // Класс Date используется для работы с датами и временем. Он позволяет создавать объекты, которые представляют определенные моменты времени. Эти объекты содержат информацию о дне, месяце, годе, часах, минутах, секундах и миллисекундах.
// 2) Каким образом инициализировать дату 
// (например, текущий момент времени или другую дату)

        
// дату можно инициализировать несколькими способами. 

    //  1. Текущий момент времени:

            let currentDate = new Date()
            console.log(currentDate);
            // 2020-05-13T18:46:11.555Z //

    // 2. Специфическая дата и время:

            let specifiedDate = new Date(2024, 4, 13)
            console.log(specifiedDate);
            // 2024-05-12T22:00:00.000Z //

    // 3. Строка с датой: 

            let dateString = "2024-05-13T12:30:00";
            let parsedDate = new Date(dateString);

// 3) Какие есть удобные методы по работе с датой 

new Date(),

getFullYear(), getMonth(), getDate(),

getHours(), getMinutes(), getSeconds(), getDay(),

toString(),

setFullYear(year), setMonth(month), setDate(date),

setHours(hours), setMinutes(minutes), setSeconds(seconds)


// Задача 1.
// Определите количество ЧАСОВ которые прошли с 1970 года до текущего момента времени.
// Примечание: полученное значение округлите по правилам математики.

// let currentTime = Date.now()
// let countHours = Math.round(currentTime / (1000 * 60 * 60));

// console.log(countHours)//
// ---------------------------------
// Задача 2
// Какое количество дней прошло с начала 2000 года до текущего момент времени?
// Примечание: полученное значение округлите по правилам математики

// let startDate = new Date(2000, 0, 1);
// console.log(startDate); //--> 1999-12-31T23:00:00.000Z
// let currentTime = new Date(); 
// console.log(currentTime); //--> 2024-05-12T19:20:56.924Z
// let timeDifference = currentTime - startDate;
// console.log(timeDifference); //768860484438
// let daysSince2000 = Math.round(timeDifference / (1000 * 60 * 60 * 24));
// console.log(daysSince2000); //8899

// ---------------------------------
// Задача 3. 
// Напишите функцию getWeekDay(), которая в зависимости от даты 
// (текущего момента времени) в консоль выводит день недели согласно результату

// Пример:
// getWeekDay()

// Результат:
// 'Сегодня вторник'
function getWeekDay() {
    let currentDate = new Date();
    let weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    let dayOfWeek = currentDate.getDay()
    let weekDayName = weekDays[dayOfWeek]
    return weekDayName;
}
console.log(getWeekDay());

// --------------------------------
// Задача 4. 
// Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
// Примечание: инициализация дат должна быть внутри функции

function checkDate() {
    let currentDate = new Date();
    let nextMonthFirstDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    let timeDifference = nextMonthFirstDay - currentDate
    let daysUntilEndOfMonth = Math.round (timeDifference/(1000 * 60 * 60 * 24)) 
    return daysUntilEndOfMonth
}
// console.log(checkDate());//


// Task 1. Using new Date(7 numbers), creates a new date object with the specified date and time:
// Mon Dec 24 2018 10:33:30 GMT+0100 (Mitteleuropäische Normalzeit)

let dateTask = new Date (2018, 11 , 24, 10 ,33,30,)
let offsetMinutes = dateTask.getTimezoneOffset() // -60 //
let minutes = dateTask.getMinutes() // 33 //

dateTask.setMinutes(dateTask.getMinutes() - offsetMinutes)

// console.log("dateTask.getTimezoneOffset()" + offsetMinutes);
// console.log("dateTask.getMinutes()" + minutes);
// console.log(dateTask);

// Task 2. Create a new date object with the current date and time:

// Mon May 13 2024 14:21:38 GMT+0200 (Mitteleuropäische Sommerzeit)

const b = new Date("October 13, 2014 11:13:00"); // --> 2014-10-13T09:13:00.000Z //
const c = new Date(2018); // --> 1970-01-01T00:00:02.018Z //
const e = new Date(2018, 11, 24, 10, 33); // --> 2018-12-24T09:33:00.000Z //
const f = new Date(9, 11, 24); // --> 1909-12-23T23:00:00.000Z //

const g = new Date();
g.toString(); //--> 2024-05-13T18:27:43.823Z //


const d = new Date();
d.toDateString(); // --> 2024-05-13T18:31:18.342Z //


const j = new Date();
let result = j.setFullYear(2020);
console.log(j);



