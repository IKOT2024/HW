
// Урок 2.5


//1
function minNumber(a, b) {
      if (a <= b) {
            return a;
      } else {
            return b;
      }
}

console.log("1 число :", minNumber(4, 8));
console.log("2 число :", minNumber(6, 6));
console.log("3 число :", minNumber(110, 170));



//2
function retyrnNumber(n) {
      if (n % 2 == 0) {
            return 'Число четное'
      } else {
            return 'Число нечетное'
      }
}

console.log(retyrnNumber(78));



//3
let acceptNumber = (x) => x * x;

let x = 3;
let accept = acceptNumber(x);

console.log(`Квадрат числа ${x} равен ${accept}`);

let doubleSquare = accept * 2;
console.log(`Удвоенный квадрат числа ${x} равен ${doubleSquare}`);


//4
function userAge() {

      let ageUser = prompt('Сколько вам лет?');

      if (ageUser < 0) {
            console.log("Вы ввели неправильное значение");
      } else if (ageUser >= 0 && ageUser <= 12) {
            console.log("привет друг");
      } else if (ageUser >= 13) {
            console.log("Добро пожаловать");
      }
}
userAge();

//5
function typeСonversion(x) {
      if (isNaN(x)) {
            return ('Одно или оба значения не являются числом');
      }
      else {
            return x * x
      }

}

console.log("1 значение :", typeСonversion(112));
console.log("2 значение :", typeСonversion('abc'));



//6
function enterNumber() {
      let p = prompt('введите пожалуйста число');

      if (isNaN(p)) {

            return ('Переданный параметр не является числом');
      }
      else {
            return p * p;

      }
}

console.log("1 значение :", enterNumber());
console.log("2 значение :", enterNumber());



//7
let circle1 = {
      radius: 9,
      getArea() {
            return Math.PI * Math.pow(this.radius, 2)
      },

      getPerimeter() {
            return 2 * Math.PI * this.radius;
      }
};

let circle2 = {
      radius: 23,

      getArea() {
            return Math.PI * Math.pow(this.radius, 2);
      },

        getPerimeter() {
            return 2 * Math.PI * this.radius;
      }
};

console.log("Circle1 Area:", circle1.getArea());
console.log("Circle1 Perimeter:", circle1.getPerimeter());
console.log("Circle2 Area:", circle2.getArea());
console.log("Circle2 Perimeter:", circle2.getPerimeter()); 

