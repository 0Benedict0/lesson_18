var myNum = 10;
var myStr = 'some string';
var myBoll = true;
var myArr = [1 , 2 , 3 , 4 , 5];
var myObj = {
    first: 'first Name',
    last: 'last Name',
};
// #2
var decimal2 = myNum.toFixed(2);
console.log(decimal2);

// #3
let i = 2;
i++;
console.log(i);

let b = 56;
b--;
console.log(b);

// #4

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

// #5
const myPi = Math.PI;
console.log('myPi:' , myPi);

 const myRound = Math.round(89.279);
 console.log('myRound:' , myRound );

 const myRandom = Math.floor(Math.random() *11);
 console.log('myRandom:' , myRandom);

 const myPow = Math.pow(3, 5);
 console.log('myPow:', myPow);

//  #6


var strObj = {
     str : 'Мама мила раму, рама мила маму ' 
    
};
console.log ( 'Мама мила раму, рама мила маму '+ strObj.str.length)

// #7

var strObj = {
    str : 'Мама мила раму, рама мила маму '  
};

let isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos:' , isRamaPos);

let isRama = isRamaPos !== -1;
console.log('isRama' , isRama);


// #8


let strReplace = strObj.str.replace('мила', 'моет').replace('рама', 'Рама').replace('маму', 'держит маму');
console.log(strReplace);


// #9


var someStr = 'some STRING';
var upperStr = someStr.toUpperCase();
var lowerStr = someStr.toLowerCase();

console.log(upperStr); // Виведе: 'SOME STRING'
console.log(lowerStr);