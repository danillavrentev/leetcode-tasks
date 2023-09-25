
// Напишите функцию  createCounter. Он должен принимать начальное целое число  init. Он должен возвращать объект с тремя функциями.

// Три функции:

// increment() увеличивает текущее значение на 1, а затем возвращает его.
// decrement() уменьшает текущее значение на 1, а затем возвращает его.
// reset() устанавливает текущее значение  init и затем возвращает его.



let createCounter = function(init) {
    let perCount = init;


function increment (){
    return ++perCount;   
    }

function decrement() {
    return --perCount;    
    }
    
function reset() {
    return (perCount == init);
    } 

return{increment, decrement, reset};

};
