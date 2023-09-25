// Напишите функцию  createHelloWorld. Он должен возвращать новую функцию, которая всегда возвращает  "Hello World".


let helloWorld = function () {
    return () => 'Hello world'
}