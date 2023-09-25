// Учитывая целое число  n, верните counterфункцию. Эта counterфункция сначала возвращает  n , а затем возвращает на 1 больше предыдущего значения при каждом последующем вызове ( n, n + 1, n + 2и т. д.)

var createCounter = function(n) {
    return function() {
        return n++;
    }
}

const counter = createCounter(10);
