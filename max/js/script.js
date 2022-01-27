// Запитай у користувача радіус кола і виведи площу такої окружності.

const PI_NUMBER = 3.14;
let radiusOfTheCircle = prompt('Введіть радіус кола:');
let areaOfTheCircle = (PI_NUMBER * (radiusOfTheCircle * radiusOfTheCircle));
alert(('Площа круга дорівнює: ') + areaOfTheCircle);


/*Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.*/

let distanceBetweenCities = prompt('Введіть відстань в кілометрах між двома містами:');
let travelTime = prompt('Введіть за скільки годин хочете туди дістатися:');
let movementSpeed = (distanceBetweenCities / travelTime);
alert(`Вам потрібно рухатись зі швидкістю ${movementSpeed} км/год.`);


// Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.

const EURO_TO_DOLLAR_RATIO = 1.13;
let amountOfDollars = prompt('Введіть сумму в долларах:');
let dollarToEuroConversion = (amountOfDollars / EURO_TO_DOLLAR_RATIO);
alert(('Сумма в євро становить: ') + dollarToEuroConversion);