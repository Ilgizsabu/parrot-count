const nameThink = prompt('Введите название того, что вы хотите измерить?');
const lengthThink = +prompt('Введите длину в метрах того, что вы хотите измерить?');

const snake = Math.round(lengthThink / 9);
const elephant = Math.round(lengthThink / 4.5);
const monkey = Math.round(lengthThink / 0.75);
const parrot = Math.round(lengthThink / 0.25);

alert('Длина ' + nameThink + ' равна: Удавов - ' 
+ snake + 'шт, Слонов - ' + elephant + 'шт, Мартышек - ' 
+ monkey + 'шт, Попугаев - ' + parrot + 'шт'); 

if (lengthThink !== lengthThink) {
    alert('Вы ввели некорректные данные!');
}

// Another version of the code via isNaN

// if (isNaN(lengthThink)) {
//  alert('Вы ввели некорректные данные!');         
// }