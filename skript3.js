// // 2.6

// 1
const stopDigit = [1, 5, 4, 10, 0, 3];
for(let i = 0; i < stopDigit.length; i++) {
    if(stopDigit[i] == 0) break;
    console.log(stopDigit[i]);
}



// вторая вариация решения задачи №1
let arrayMassiv = [1, 5, 4, 10, 0, 3];
let i = 0;

while (i < arrayMassiv.length) {
    if (arrayMassiv[i] === 10) {
        console.log(arrayMassiv[i]);
        break;
    }
    console.log(arrayMassiv[i]);
    i++;
}



//2
let findValue = [1, 5, 4, 10, 0, 3];

let itSeemsToWorkOut = findValue.includes(4);

console.log(itSeemsToWorkOut);



//3
const thirdTask = [1, 3, 5, 10, 20];
const itsDifficultForMe = thirdTask.join(" ")
console.log(itsDifficultForMe);



//4
let numberFour = [];

for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    numberFour.push(row);
}
console.log(numberFour);



//5
const doYouWantAnySupplements = [1, 1, 1];
doYouWantAnySupplements.push(2, 2, 2);
console.log(doYouWantAnySupplements);



// 6
const sortingTheArray = [9, 8, 7, 'a', 6, 5]
sortingTheArray.sort();
console.log(sortingTheArray);
const filtersortingTheArray = sortingTheArray.filter(sorting => sorting !== 'a');
console.log(filtersortingTheArray);



// 7

const arrayOfNumbers = [9, 8, 7, 6, 5]; {
    let youHaveOneTry = prompt("Угадайте число");
    arrayOfNumbers.includes(9, 8, 7, 6, 5);
    (youHaveOneTry >= 5 &&  youHaveOneTry <= 9 ? alert('Угадал') : alert('Не угадал'))
    }
    console.log(arrayOfNumbers);



// другой способ решения задачи №7
let arr = [9, 8, 7, 6, 5];
let userGuess = prompt("Угадайте число из массива");
userGuess = Number(userGuess);
if (arr.includes(userGuess)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}
console.log(userGuess)


// 8
const returnTheString = 'abcdef';
const splitReturnTheString = returnTheString.split("");
splitReturnTheString.reverse()
console.log(splitReturnTheString);



// 9
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);



// 10 
function generateRandomArray(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 10) + 1);
}

const array = generateRandomArray(10);
console.log('Массив:', array);

for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const next = i < array.length - 1 ? array[i + 1] : 'Нет следующего элемента';
    const sum = next !== 'Нет следующего элемента' ? current + next : current;
    console.log(`Текущий элемент: ${current}, Следующий элемент: ${next}, Сумма: ${sum}`);
}



//11
function arrayOfIntegralNumbers(will) {
    return will.map(wil => wil ** 2);
}

const will = [1, 2, 6, 7, 12, 38];
const myAnswer = arrayOfIntegralNumbers(will);

console.log(myAnswer);



// 12
function arrayOfStrings (worlds) {
    return worlds.map(world => world.length);
}

const worlds = ['I', 'finished', 'this', 'work', 'at', 'one', 'in', 'the', 'morning']
const thisWork = arrayOfStrings(worlds);

console.log(thisWork);



// 13
function filterNum(numb) {
    return numb.filter( numb => numb < 0);
}
const numb = [1, -13, 3, -0.5, -11, 7, 0, 13, -9, -10];
const terNum = filterNum(numb);

console.log(terNum);



// 14
function findTheQuotient(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 10) + 1);
}

const findThe = findTheQuotient(10)
console.log( findThe);

const filteredNumbers = findThe.filter(numbers1 => numbers1 % 2 === 0);
console.log(`исходный массив: ${findThe}, массив с четными  числами: ${filteredNumbers}`);



// 15
function findYou(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 7) + 1);
}

const find = findYou(6);
console.log(find);

const arithmeticMean = find.reduce((q, o) => q + o, 0);

const result = arithmeticMean / 6;

 console.log(`среднее арифметическое: ${result}`);



