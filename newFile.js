const { day } = require("./skript3");

switch (day) {
    case '90 - 100 баллов':
        console.log('отлично');
        break;
    case '70 - 89 баллов':
        console.log('хорошо');
        break;
    case '50 - 69 баллов':
        console.log('удовлетворительно');
    case 'менее 50 баллов':
        console.log('Неудовлетворительно');
    default:
        console.log('Вы вели что то не то');
        break;
}
