// 'use strict';




// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// for(let i = 0; i < 3; i++){
//     console.log(i);
//     for(let j = 0; j < 3; j++){
//         console.log(j);
//     }
// };

// let result = '';
// const length = 10;

// for(let i = 0; i < length; i++){
//     for(let j = 0;j < i; j++){
//         result += '*'
//     }
//     result += '\n'
// }

// console.log(result);

// first: for(let i = 0; i < length; i++){
//     console.log(`first lvl: ${i}`);
//     for(let j = 0;j < i; j++){
//         console.log(`second lvl: ${j}`);
//         for(let k = 0;k < i; k++){
//             if(k === 2) continue first;
//             console.log(`third lvl: ${k}`);
//         }
//     }
// // }
// const arrayOfNumbers = [];

// // Пишем решение вот тут
// for(let i = 5; i <= 10; i++){
//     arrayOfNumbers[i-5] = i;
//     console.log(i)
    
// }

// Не трогаем
// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// // Пишем решение вот тут
// for(let i = 0; i < 7; i++){
//     result[i] = arr[i];
// }

// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// // Пишем решение вот тут
// for(let i = 0; i < 5 ; i++){
//     if(typeof(data[i]) == 'string'){
//         data[i] = `${data[i]} - done`;
//     }else{
//         data[i] *= 2
//     }
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// // // Пишем решение вот тут
// for(let i = 0; i< 5; i++){
//     result[i] = data[i];
// }

// result.reverse()
// console.log(result);
// console.log(data.reverse());

// const lines = 5;
// let result = '';

// for(let i = 0; i < lines; i++){
    
// }


// function showFirstMessage(text){
//     let num = 20; // local variable
//     console.log(`${text}: ${num}`);
// }

// showFirstMessage('welcome');

// num = 40;
// console.log(num);

// function ret(){ // fDeclaration - видна до объявления 
//     let num = 50;
    
//     //

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// let data = function() { // fExpression - работает как переменная(не видна до объявления) 
//     console.log(0)
// };

// const calc = (a, b) => a + b; // arrow function - dont have call context 

// console.log(calc(8,9))

// codewars

const smash = words => words.join(` `); //cw 1

const arr = [`ka`,`ki`,`ko`,`ku`];

console.log(smash(arr))



const squareDigits = num => { // cw 2
    num = String(num).split('');
    for(let i = 0; i < num.length; i++) num[i] =Math.pow(+num[i], 2);
    return +num.join('');
};
let data = 555;

console.log(squareDigits(data));