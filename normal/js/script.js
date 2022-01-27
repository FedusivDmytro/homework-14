let userName = prompt(`Введіть своє ім'я:`);
alert(`Привіт, ${userName}`);


const CURRENT_YEAR = 2022;
let yearOfBirth = prompt('Введіть свій рік народження:');
let age = (CURRENT_YEAR - yearOfBirth);
alert(('Ваш вік: ') + age);

let sideOfTheSquare = prompt('Введіть сторону квадрата:');
let perimeterOfTheSquare = (sideOfTheSquare * 4);
alert(('Периметр квадрата дорівнює: ') + perimeterOfTheSquare);