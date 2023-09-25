// Напишите функцию  argumentsLength, которая возвращает количество переданных ей аргументов

// Первое решение
const someArray = [];

const argumentsLength = function(someArray) {
    return someArray.length;
}
console.log(argumentsLength([5, 2, 3, {}]));

// Второе решение
const argumentsLength1 = function (...args) {
    return args.length
}

console.log(argumentsLength1(5, 22, 535));