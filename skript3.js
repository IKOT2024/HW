// Основы работы DOM

//1

const titleEl = document.querySelector('.title');
const btnEl = document.querySelector('.btn');


btnEl.addEventListener('click', function () {

if (titleEl.style.display === 'none') {

    titleEl.style.display = 'block';
    btnEl.textContent = 'Скрыть'
} else {
    titleEl.style.display = 'none';
    btnEl.textContent = 'Показать'
}

});


//2

const text__paragEl = document.querySelector('.text__parag');
const buttonEl = document.querySelector('.button');

buttonEl.addEventListener('click', () => {
    text__paragEl.style.color = 'blue'
})

//3 


const textEl = document.querySelector('.text');
const butEl = document.querySelector('.but');

butEl.addEventListener('click', () => {
    textEl.textContent = 'Привет, мир!' 
})



//4


const elements = document.querySelectorAll('.description');

elements.forEach(element => {
    element.textContent = 'Измененный текст'
})


//5

const descriptionClass = document.querySelectorAll('.description2');
const arg = document.querySelector('.arg');
const parag1 = document.querySelector('parag');

descriptionClass.forEach(el => {
    el.textContent = 'Новый текст'
})

//6


const paragEl = document.querySelector('.parag');
const but2El = document.querySelector('.but2');

but2El.addEventListener('click', () => {
    const newParagEl = document.createElement('h2');
    newParagEl.textContent = 'Новый абзац';
    newParagEl.classList.add('newParag');
    paragEl.appendChild(newParagEl);
})

//7

const btnremoveEl = document.querySelector('.btnremove');
const description3El = document.querySelector('.description3');
const twoEl = document.querySelector('.two');
const threeEl = document.querySelector('.three');
const fourEl = document.querySelector('.four');
const faveEl = document.querySelector('.fave');




btnremoveEl.addEventListener('click', function (e) {
    const description3El = document.querySelector('.description3');
    description3El.remove();
})