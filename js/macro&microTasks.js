setTimeout(() => console.log('timeout'));  // macrotask

Promise.resolve()
    .then(() => console.log('promise_1'));   //microtask 1

queueMicroTask(() => console.log('sequence microtask'));    //microtask 2

Promise.resolve()
    .then(() => console.log('promise_2'));    //microtask 3

console.log('sinchrone code');                  // sinchrone code 1



//order tasks
// () => {}             macrotask  например отслеживание движения мыши или timeout
//microtasks: then / catch / finally / await            все микротаски в очереди
//render            отрисовка страницы
// () => {}
//microtasks: then / catch / finally / await
//render
// () => {}
//microtasks: then / catch / finally / await
//render