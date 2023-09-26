const once = function(fn) {
    let called = false;

    return function(...args) {
        if (called === false) {
            called = true;
            return fn( ...args);
        }
        else {
            return undefined
        }
    }
};
let fn = (a,b,c) => (a + b + c) // стрелочная функция

let onceFn = once(fn)
console.log(onceFn(1,2,3));
console.log(onceFn(2,3,6));