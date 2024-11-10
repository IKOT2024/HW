//2.8

//1

const mort = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 mort.sort((argumentOne, argumentTwo) => argumentOne.age - argumentTwo.age);
 console.log(mort)

//2

function isPositive(number) {
    return number > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(array, predicate) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

//3

let CurrentDate = new Date();
setInterval 
let iDisplayTheCurrentDate = setInterval(() => console.log(`${CurrentDate}`), 3000);
setTimeout(() => { clearInterval(iDisplayTheCurrentDate); console.log('30 секунд прошло'); }, 30000);


//4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
   
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

//5

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));