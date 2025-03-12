console.log('#1. Приклад домашнього завдання з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'
var myNum = 10;
var myStr = 'some string';
var myBoll = true;
var myArr = [1 , 2 , 3 , 4 , 5];
var myObj = {
    first: 'first Name',
    last: 'last Name',
};
/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */
var decimal2 = myNum.toFixed(2);
console.log(decimal2);
// decimal2

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i
let i = 2;
i++;
console.log(i);

let b = 56;
b--;
console.log(b);
/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

// myTest
// +=
// –=
// *=
// /=
// %=
var myTest = 20;
let a = 10;
let c = 'hello word';
myTest -= myNum;
console.log(myTest);
myTest += b;
console.log(myTest);
myTest *= 5;
console.log(myTest);
myTest /= a ;
console.log(myTest);
myTest %= myNum;
console.log(myTest);
/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow
const myPi = Math.PI;
console.log('myPi:' , myPi);

 const myRound = Math.round(89.279);
 console.log('myRound:' , myRound );

 const myRandom = Math.floor(Math.random() *11);
 console.log('myRandom:' , myRandom);

 const myPow = Math.pow(3, 5);
 console.log('myPow:', myPow);

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj
var strObj = {
    str : 'Мама мила раму, рама мила маму ' 
   
};
console.log ( 'Мама мила раму, рама мила маму '+ strObj.str.length)
/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama
var strObj = {
    str : 'Мама мила раму, рама мила маму '  
};

let isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos:' , isRamaPos);

let isRama = isRamaPos !== -1;
console.log('isRama' , isRama);

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace
let strReplace = strObj.str.replace('мила', 'моет').replace('рама', 'Рама').replace('маму', 'держит маму');
console.log(strReplace);
/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr
var someStr = 'some STRING';
var upperStr = someStr.toUpperCase();
var lowerStr = someStr.toLowerCase();

console.log(upperStr); // Виведе: 'SOME STRING'
console.log(lowerStr);