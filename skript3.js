2.7

//1

const convertToUppercase = 'js';
const convertedToUppercase = convertToUppercase.toUpperCase();
console.log(convertedToUppercase);

//2

function acceptTheNumber(array, startStr) {
    return array.filter((value) => { return value.toLowerCase().startsWith(startStr.toLowerCase()) });

}

console.log(acceptTheNumber(['михаил', 'милый', 'молоко', 'дрель', 'мама'], 'Ми'));


//3

const roundTheNumber = 32.58884;
console.log(Math.round(roundTheNumber), Math.ceil(roundTheNumber), Math.floor(roundTheNumber));

//4

const findTheMinimumNumber = Math.min(52, 53, 49, 77, 21, 32);
const findTheMaximumNumber = Math.max(52, 53, 49, 77, 21, 32);

console.log(findTheMaximumNumber, findTheMinimumNumber);



//5

function nameNumber() {
    console.log(Math.floor(Math.random() * 10) + 1);
}
nameNumber();


//6

function generateRandomArray(number) {

    if (!Number.isInteger(number) || number < 0) {
        throw new Error("Аргумент должен быть целым неотрицательным числом.");
    }

    const arrayLength = Math.floor(number / 2);

    const randomArray = [];
    for (let i = 0; i < arrayLength; i++) {
        const randomNumber = Math.floor(Math.random() * (number + 1));
        randomArray.push(randomNumber);
    }

    return randomArray;
}

console.log(generateRandomArray(20))


//7

function takeTwoIntegers(rays1, rays2) {
    return Math.floor(Math.random() * (rays2 - rays1 + 1)) + rays1;
}
console.log(takeTwoIntegers(10, 20));

//8

let displayCurrentDate = new Date();
console.log(displayCurrentDate);

//9

let currentDate = new Date()
console.log(+currentDate);

let seventyThreeDays = 73 * 24 * 60 * 60 * 1000;

let searchDate = +currentDate + seventyThreeDays;

let seventyThreeDaysAgo = new Date(searchDate);

console.log(seventyThreeDaysAgo);



//10 

function formatDate(date) {
  
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    const daysOfWeek = [
        "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];

 
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const formattedDate = `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.`;
    const formattedTime = `Время: ${hours}:${minutes}:${seconds}`;

    return `${formattedDate}\n${formattedTime}`;
}

const date = new Date();
console.log(formatDate(date));