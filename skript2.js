
// Задача "Угадай число"
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    
    const guess = parseInt(prompt("Введите число от 1 до 100:"));

   
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Пожалуйста, введите корректное число от 1 до 100.");
        checkGuess(); 
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        alert(`Поздравляем! Вы угадали число ${randomNumber} за ${attempts} попыток.`);
    } else if (guess < randomNumber) {
        alert("Загаданное число больше.");
        checkGuess();
    } else {
        alert("Загаданное число меньше.");
        checkGuess();
    }
}



// задача "Арифметические задачи"
const operations = ["+", "-", "*", "/"];


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTask() {
    const operation = operations[getRandomNumber(0, operations.length - 1)];
    let num1, num2, task;

    switch (operation) {
        case "+":
            num1 = getRandomNumber(1, 100);
            num2 = getRandomNumber(1, 100);
            task = `${num1} + ${num2}`;
            break;
        case "-":
            num1 = getRandomNumber(1, 100);
            num2 = getRandomNumber(1, num1); 
            task = `${num1} - ${num2}`;
            break;
        case "*":
            num1 = getRandomNumber(1, 10);
            num2 = getRandomNumber(1, 10);
            task = `${num1} * ${num2}`;
            break;
        case "/":
            num1 = getRandomNumber(1, 100);
            num2 = getRandomNumber(1, 10);
            num1 = num1 * num2; 
            task = `${num1} / ${num2}`;
            break;
    }

    return { task, correctAnswer: eval(task) };
}


function checkAnswer() {
    const { task, correctAnswer } = generateTask();
    const userAnswer = prompt(`Решите задачу: ${task}`);

    if (userAnswer === null) {
        alert("Вы отменили ввод.");
        return;
    }

    const userAnswerNumber = parseFloat(userAnswer);

    if (isNaN(userAnswerNumber)) {
        alert("Пожалуйста, введите число.");
        checkAnswer();
        return;
    }

    if (userAnswerNumber === correctAnswer) {
        alert("Правильно!");
    } else {
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }
    const nextTask = confirm("Хотите решить еще одну задачу?");
    if (nextTask) {
        checkAnswer();
    } else {
        alert("Спасибо за игру!");
    }
}
